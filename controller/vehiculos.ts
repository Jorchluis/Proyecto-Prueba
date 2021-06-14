import {Request, Response} from 'express'
import Vehiculo from '../models/vehiculo'; 

export const getVehiculos = async (req:Request, res:Response)=>{
    const vehiculos = await Vehiculo.findAll(); 
    res.json({ vehiculos }); 
}

export const getVehiculo = async (req:Request, res:Response)=>{
    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk( id ); 

    if( vehiculo ) {  
        res.json(vehiculo);  
    } else {
        res.status(404).json({
            msg: `No existe un registro de vehiculo con el id ${ id }`
        });
    }
}

export const postVehiculo = async(req:Request, res:Response)=>{
    const {body} = req

    try{
        const existePlaca = await Vehiculo.findOne({  
            where: {
                placa: body.placa
            }
        });

        if (existePlaca) {  
            return res.status(400).json({
                msg: 'Ya existe un vehiculo con esta placa ' + body.placa 
            });
        }
        const vehiculo = Vehiculo.build(body)
        await vehiculo.save();
        
        res.json( vehiculo );

    }
    catch (error){
        console.log(error)
        res.status(500).json({
            msg: "Error Hable con el administrador",
            body
        })
    }
   
}

export const putVehiculo = async( req: Request , res: Response ) => { 

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const vehiculo = await Vehiculo.findByPk( id ); 
        if ( !vehiculo ) {  
            return res.status(404).json({
                msg: 'No existe una bodega con el id ' + id
            });
        }

        await vehiculo.update( body ); 

        res.json( vehiculo ); 


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

export const deleteVehiculo = async( req: Request , res: Response ) => { 

    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk( id );
    if ( !vehiculo ) { 
        return res.status(404).json({
            msg: 'No existe un registro con el id ' + id
        });
    }

    await vehiculo.update({ estado: false }); 

    await vehiculo.destroy(); 


    res.json(vehiculo); 
}
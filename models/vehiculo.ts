import { DataTypes } from 'sequelize';
import db from '../db/connections';



const Vehiculos = db.define('Vehiculo', {  
    marca: { 
        type: DataTypes.STRING
    },
    placa: {  
        type: DataTypes.STRING
    },
    anio: { 
        type: DataTypes.NUMBER
    },

    color: { 
        type: DataTypes.STRING
    },

});


export default Vehiculos; 
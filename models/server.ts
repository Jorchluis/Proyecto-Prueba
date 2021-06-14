import express, { Application }from 'express'; //importacion desestructurada
import cors from 'cors'
import vehiculoRoutes from '../router/vehiculo'
import db from '../db/connections';

class Server {
    private app:Application //variable del tipo application
    private port: string
    private apiPaths = {vehiculos:'/api/vehiculos' }


    constructor (){
        this.app= express()
        this.port = process.env.PORT || '8085'
        
        //Métodos iniciales
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection(){
        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            throw new Error( error );
        }
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //LECTURA DEL BODY
        this.app.use(express.json())
        //CARPETA PUBLICA
        this.app.use(express.static('public'))
    }

    routes (){
        this.app.use(this.apiPaths.vehiculos, vehiculoRoutes)
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}
export default Server
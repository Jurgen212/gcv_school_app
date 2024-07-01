import express from 'express'

// Middlewares
import cors from 'cors'

//Routes
import dropTemplateRoutes from  '../routes/dropTemplateRoutes'
import dataTemplateRoutes from  '../routes/dataTemplateRoutes'
import calendarRoutes     from  '../routes/calendar'
import usuarioRoutes      from  '../routes/usuarioRoutes'

class Server{

    private app : any
    private port: string               

    private apiPaths = {
        dropTemplate: '/api/droptemplate',
        dataTemplate: '/api/datatemplate',
        calendar    : '/api/calendar'    ,
        usuario     : '/api/user'       
    }

    constructor(){

        this.app    = express()
        this.port   = process.env.PORT || '8080'

        this.middlewares()
        this.routes()
    }

    routes(){

        try{

            this.app.use( this.apiPaths.dropTemplate, dropTemplateRoutes    )
            this.app.use( this.apiPaths.dataTemplate, dataTemplateRoutes    )
            this.app.use( this.apiPaths.calendar    , calendarRoutes        )
            this.app.use( this.apiPaths.usuario     , usuarioRoutes         )
        } catch( err ){
            throw new Error("Error in routes() in models/server: " + err )
        }
    }

    middlewares(){

        try{

            this.app.use( cors()            )
            this.app.use( express.json()    )
        } catch( err ){
            throw new Error("Error in middlewares() file models/server: " + err )
        }
    }


    listen(){
        try{

            this.app.listen( this.port, () =>{
                console.clear()
                console.log("Server running in port: " + this.port )
            })
        } catch( error  ){

            throw new Error("Error in listen() file models/server" + error )
        }
    }
}

export default Server
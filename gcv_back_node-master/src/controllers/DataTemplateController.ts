import { Pool }                     from 'pg';
import { IDataTemplateController }  from './IDataTemplateController';
import ConnectionDB from '../database/connection';
import { deleteTemplateByIdData, getAllTemplatesData, getTemplateByIdData, postTemplateData, updateTemplateByIdData } from '../services/DataTemplateService';
import { response } from 'express';


class DataTemplateController implements IDataTemplateController{

    
    public async getAllTemplates(req: any, res: any) {

        try{

            getAllTemplatesData( new ConnectionDB().pool ).then( response => {
                
                if( response.status == 200 ) return res.status( response.status ).json( response.payload )
                return res.status( response.status ).json({ msg: response.msg })
            })
        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DataTemplateController/getAllTemplates(): " + err })
        }
    }

    public async getTemplateById(req: any, res: any) {

        try{

            const id        = req.params.id
            const response  = getTemplateByIdData( new ConnectionDB().pool, id )
    
            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DataTemplateController/getTemplateById(): " + err })
        }
    }

    public async updateTemplateById(req: any, res: any) {

        try{

            const id        = req.params.id
            const payload   = req.body
            const response  = updateTemplateByIdData( new ConnectionDB().pool, id, payload )
    
            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DataTemplateController/updateTemplateById(): " + err })
        }
    }

    public async postTemplate(req: any, res: any) {

        try{

            const payload = req.body
            const response = postTemplateData( new ConnectionDB().pool, payload )
    
            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DataTemplateController/postTemplate(): " + err })
        }
    }

    public async deleteTemplateById(req: any, res: any) {
        
        try{

            const id = req.params.id
            const response = deleteTemplateByIdData( new ConnectionDB().pool, id )
    
            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DataTemplateController/deleteTemplateById(): " + err })
        }
    }
}

export default DataTemplateController
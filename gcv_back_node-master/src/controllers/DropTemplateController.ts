import { Pool } from 'pg';
import ConnectionDB from '../database/connection';
import { IDropTemplateController } from './IDropTemplateController';
import { getAllTemplatesDrop, getTemplateByIdDrop, updateTemplateByIdDrop, postTemplateDrop, deleteTemplateByIdDrop } from '../services/DropTemplateService';

class DropTemplateController implements IDropTemplateController{

    
    public async getAllTemplates(req: any, res: any) {
        
        
        try{

            const response = getAllTemplatesDrop( new ConnectionDB().pool )
    
            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DropTemplateController/getAllTemplates(): " + err })
        }
    }

    
    public async getTemplateById(req: any, res: any) {
        
        try{

            const  id  = req.params.id
            const response = await getTemplateByIdDrop( new ConnectionDB().pool, id )

            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })

        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DropTemplateController/getTemplateById(): " + err })
        }
    }

    public async updateTemplateById(req: any, res: any) {
        
        try{

            const  id       = req.params.id
            const payload   = req.body

            const response = await updateTemplateByIdDrop( new ConnectionDB().pool, id, payload )

            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })
            
        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DropTemplateController/updateTemplateById(): " + err })
        }
    }

    public async postTemplate       (req: any, res: any) {
        
        try{
            const payload   = req.body
            const response = await postTemplateDrop( new ConnectionDB().pool, payload )

            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })
            
        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DropTemplateController/postTemplateById(): " + err })
        }
    }

    public async deleteTemplateById(req: any, res: any) {
        try{
            const id   = req.params.id

            const response = deleteTemplateByIdDrop( new ConnectionDB().pool, id )

            if( response.status == 200 ) return res.status( response.status ).json( response.payload )
            return res.status( response.status ).json({ msg: response.msg })
            
        } catch( err ){
            res.status( 500 ).json({ msg: "Error interno, por favor contacte con equipo tecnico /DropTemplateController/deleteTemplateById(): " + err })
        }
    }
}

export default DropTemplateController
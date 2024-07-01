import { Pool } from "pg";
import { DataTemplate } from "../interfaces/DataTemplate";

interface responseService{

    payload : any   ,
    status  : number,
    msg     : string
}

export const getAllTemplatesData       = async ( pool: Pool ): Promise<responseService> =>{

    try{

        const response = await pool.query('SELECT * FROM USUARIO')
        return { payload: response.rows, status: 200, msg: 'OK' }

    }catch( err ){
        return { payload: [], status: 500, msg:'Error en services/dataTemplateService/getAllTemplatesData: ' + err } 
    }
}

export const getTemplateByIdData       = ( pool: Pool, id: number):responseService =>{
    return 
}

export const updateTemplateByIdData    = ( pool: Pool, id: number, payload: DataTemplate ): responseService =>{
    return 
}

export const postTemplateData          = ( pool: Pool, payload: DataTemplate ): responseService =>{
    return 
}

export const deleteTemplateByIdData    = ( pool: Pool, id: number): responseService =>{
    return 
}



import { Pool } from "pg"
import { TitleData } from "../interfaces/TitleData"


export const getTitleById = async( id_title: number, pool: Pool ) =>{
    try {
        
        await pool.query("BEGIN")

        const title = (await pool.query("SELECT * FROM title_data WHERE id_title = $1", [ id_title ])).rows[0]
        await pool.query("COMMIT")
        return title
    } catch (error) {
        await pool.query("ROLLBACK")
        return { payload: ["error"], status: 500, msg:'Error en helper/infoTitle/getTitleById: ' + error } 
    }
}

export const postTitle = async ( pool: Pool, title: TitleData ) =>{
    try {
        
        await pool.query("BEGIN")

        await pool.query("INSERT INTO title_data (exist, info_title, f_size ) VALUES ($1, $2, $3)", [ title.exists, title.info, title.size ])
        const titulos = await pool.query("SELECT * FROM title_data")
        const tituloCreado = titulos.rows[titulos.rows.length - 1] 

        await pool.query("COMMIT")
        
        return tituloCreado
    } catch (error) {

        await pool.query("ROLLBACK")
        return { payload: ["error"], status: 500, msg:'Error en helper/titleHelper/postTitle: ' + error } 
    }   
}
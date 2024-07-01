import { Pool } from "pg"
import { MultimediaData } from "../interfaces/MultimediaData"

export const getMultimediaById = async( pool: Pool, id_multimedia: number )=>{

    try {
        

        await pool.query("BEGIN")

        const multimedia = (await pool.query("SELECT * FROM multimedia_data WHERE id_multimedia = $1", [id_multimedia])).rows[0]
        await pool.query("COMMIT")
        return multimedia 
    } catch (error) {
        return { payload: ["error"], status: 500, msg:'Error en helper/MultimediaHelper/getMultimediaById: ' + error } 
    }
}

export const postMultimedia = async ( pool: Pool, multimedia: MultimediaData ) =>{

    try {
        

        await pool.query("BEGIN")

        await pool.query("INSERT INTO multimedia_data (exist, url_content, is_img, a_link ) VALUES ($1, $2, $3, $4)", [ multimedia.exists, multimedia.urlLink, multimedia.isImg, multimedia.a_link ])
        const multimedias = await pool.query("SELECT * FROM multimedia_data")
        const multiCreada = multimedias.rows[multimedias.rows.length - 1] 

        await pool.query("COMMIT")
        
        return multiCreada
    } catch (error) {
        return { payload: ["error"], status: 500, msg:'Error en helper/MultimediaHelper/postMultimedia: ' + error } 
    }
}
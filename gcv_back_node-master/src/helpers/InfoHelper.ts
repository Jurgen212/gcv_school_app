import { Pool } from "pg";
import { InfoData } from "../interfaces/InfoData";
import { LinkData } from "../interfaces/LinkData";


export const getInfoById = async( id_info: number, pool: Pool )=>{
    try {
        await pool.query("BEGIN")

        const information_principal = (await pool.query("SELECT * FROM info_data WHERE id_info_data = $1", [ id_info ])).rows[0]
        
        const sublinks = await getSubLinksInformation( information_principal.id_info_data, pool )

        information_principal['link'] = sublinks

        await pool.query("COMMIT")
        return information_principal 
    } catch (error) {

        await pool.query("ROLLBACK")
        return { payload: ["error"], status: 500, msg:'Error en helper/infoHelper/getInfoByIdTemplate: ' + error } 
    }
}


export const getSubLinksInformation = async( id_information: number, pool: Pool ) => {
    try {
       
        const subLinksIds = (await pool.query("SELECT * FROM info_link WHERE info_data_id = $1", [ id_information])).rows
    
        let subLinks = []
        for( let i = 0; i < subLinksIds.length; i ++ ){
            const subLinksComplete = (await pool.query("SELECT * FROM link_data WHERE id_link_data =$1", [ subLinksIds[i].id_link_data ])).rows[0]
            subLinks.push( subLinksComplete )
        }
        return subLinks

    } catch (error) {

        throw new Error("Error in helpers/infoHelper/getSubLinksInformation: " + error )
    }
}


export const postInformation = async ( payload: InfoData, pool: Pool ) =>{

    try{
    
        await pool.query("BEGIN")
        await pool.query("INSERT INTO info_data (exist, info, font_size) VALUES ($1, $2, $3)", [ payload.exists, payload.info, payload.fontSize ])
        const informations  = await pool.query("SELECT * FROM info_data")
        const infoCreado    = informations.rows[ informations.rows.length - 1 ]

        const linksCreados = await postInformationLinks( pool, payload, infoCreado.id_info_data )
        infoCreado["link"] = linksCreados

        await pool.query("COMMIT")
        return infoCreado
    } catch( err ){

        await pool.query("ROLLBACK")
       return { payload: ["error"], status: 500, msg:'Error en helper/infoHelper/postInfo: ' + err } 
    }
}

const postInformationLinks = async( pool: Pool, info: InfoData, id_info_data: number )=>{

    try{
        let linksCreated = []

        for( let i = 0; i < info.link.length; i ++ ){

            await pool.query("INSERT INTO link_data (text, url) VALUES ($1, $2)", [ info.link[i].text, info.link[i].url ] )
            const linksCreados = await pool.query("SELECT * FROM link_data")
            const ultimoLink = linksCreados.rows[ linksCreados.rows.length - 1 ]

            
            await pool.query("INSERT INTO info_link ( info_data_id, id_link_data) VALUES ($1, $2)", [ id_info_data, ultimoLink.id_link_data ] )

            linksCreated.push( ultimoLink )
        }
        return linksCreated
    } catch( err ){
        
        console.log("Error in helpers/infoHelper/postInformationLinks " + err )
    }
}

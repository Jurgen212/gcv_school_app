import { Pool } from "pg";
import { DropData } from '../interfaces/DropData';
import { subDrop } from '../interfaces/SubDrop';


//Number column nos dice si pertenece a template_drop_data_1 o al template_drop_data_2
export const getDropsByIdTemplate = async ( id: number, pool: Pool, number_column: number ) =>{

    try{
        const drops = await getDropsTemplateDrop( id, pool, number_column )
        return drops
    } catch( err ){ 
        throw new Error("Error in helpers/getDropById(): " + err )
    }
}


const getDropsTemplateDrop = async ( id_template: number, pool: Pool, number_column: number ) =>{

    try{
        await pool.query("BEGIN")
        //Conexion entre la plantilla y sus drops
        const dropsTemplate =( await pool.query(`SELECT * FROM template_drop_data_${ number_column } WHERE id_drop_template = $1`, [ id_template ]) ).rows
        
        let drops = []
        
        for( let i = 0; i < dropsTemplate.length; i ++ ){
            
            const drop_completo = await getDropsSinceTemplateDrop( dropsTemplate[i].id_drop_data, pool )
            drops.push( drop_completo )
            
        }   
        await pool.query("COMMIT")
        return drops 
    } catch( err ){

        await pool.query("ROLLBACK")
        throw new Error("Error in helpers/getDropsTemplateDrop: " + err )
    }
}


const getDropsSinceTemplateDrop = async ( id_drop: number, pool: Pool ) =>{
    
    //Obtenemos el drop 
    const drop_principal = (await pool.query( "SELECT * FROM drop_data WHERE id_drop_data = $1", [  id_drop ] )).rows[0]
    const listaIdSubDrops = (await pool.query("SELECT * FROM drop_sub WHERE id_drop_data = $1", [ id_drop ])).rows

    let subdrops = []

    for( let i = 0; i < listaIdSubDrops.length; i ++ ){ 
        const sub_drop = (await pool.query("SELECT * FROM sub_drop WHERE id_sub_drop = $1", [ listaIdSubDrops[i].id_sub_drop ] )).rows
        subdrops.push( sub_drop )
    }
    
    drop_principal['drop'] = subdrops
    //Obtenemos los subdrops del drop 
    return drop_principal
}





export const updateDrop = async( payload: DropData, pool: Pool ) =>{
    try{
        return await pool.query("UPDATE drop_data set title=$1, exist=$2, font_size_title=$3 WHERE id_drop_data = $4", [ payload.title, payload.exists, payload.fontSizeTitle, payload.id_drop_data ])
    } catch( err ){
        throw new Error("Error in helpers/updateDrop(): " + err )
    }
}

//Type drop es para saber si es drop del 1 o del 2
export const postDrop = async ( payload: DropData[], pool: Pool ) =>{
    try{
       
       const resp: any = await postDistintosDrops( pool, payload )
       return resp
    } catch( err ){
       return { payload: ["error"], status: 500, msg:'Error en helper/dropHelper/postDrop: ' + err } 
    }
}

const postDistintosDrops = async ( pool: Pool, drops: DropData[] ) =>{


    try {
        let dropsPrincipales: any[] = [];
        await pool.query("BEGIN")
        //LA lista de drops la recorremos y subimos uno por uno, cada vez que se sube uno, sus sublista de subdrop tambien se suben y se relaciona todo en drop_sub
        for( let i = 0; i < drops.length; i ++ ){
            

            await pool.query("INSERT INTO drop_data (title, exist, font_size_title) VALUES ($1, $2, $3)", [ drops[i].title, drops[i].exists, drops[i].fontSizeTitle ] ) 
            const dropCreado = await pool.query("SELECT * FROM drop_data")
            const ultimo     = dropCreado.rows[ dropCreado.rows.length - 1]
            dropsPrincipales.push( ultimo )
        
        
            for( let k = 0; k < drops[i].drop.length; k++ ){
                
    
                await pool.query("INSERT INTO sub_drop( is_img, font_size_data, url_image, info, a_link) VALUES ($1, $2, $3, $4, $5)", [ drops[i].drop[k].isImg, drops[i].drop[k].fontSizeData, drops[i].drop[k].urlImage, drops[i].drop[k].info, drops[i].drop[k].a_link ])
                
                const subDropCreado = await pool.query("SELECT * FROM sub_drop")
                const ultimoSub = subDropCreado.rows[ subDropCreado.rows.length - 1 ]
                
                await pool.query("INSERT INTO drop_sub (id_drop_data, id_sub_drop) VALUES ($1, $2)", [ ultimo.id_drop_data, ultimoSub.id_sub_drop])
            }
        }

        await pool.query("COMMIT")
        return dropsPrincipales

    } catch (error) {

        await pool.query("ROLLBACK")
        console.log("Error in helpers/DropHelper/postDistintosDrops: " + error )
    }
}


export const postConnectDropToTemplate = async ( pool: Pool, dropData: DropData[], id_template: number, type: number ) =>{
    try {
        
        await pool.query("BEGIN")
        for( let i = 0; i < dropData.length; i ++ ){
            await pool.query(`INSERT INTO template_drop_data_${ type } (id_drop_template, id_drop_data) VALUES ($1, $2)`, [ id_template, dropData[i].id_drop_data ] )
        }

        await pool.query("COMMIT")
    } catch (error) {

        await pool.query("ROLLBACK")
        console.log("Error in helpers/dropHelper/postConnectDropToTemplate: " + error )
    }
}


export const deleteConnectDropToTemplate = async( pool: Pool, id_template: number ) =>{

    try {
        
        await pool.query("BEGIN")
    
        await pool.query(`DELETE FROM template_drop_data_1 WHERE id_drop_template = $1`, [ id_template ] )
        await pool.query(`DELETE FROM template_drop_data_2 WHERE id_drop_template = $1`, [ id_template ] )
        

        await pool.query("COMMIT")
    } catch (error) {

        await pool.query("ROLLBACK")
        console.log("Error in helpers/dropHelper/deleteConnectDropToTemplate: " + error )
    }
}
import { Pool } from "pg";
import { DropTemplate, DropTemplateEnviar } from "../interfaces/DropTemplate";
import { deleteConnectDropToTemplate, getDropsByIdTemplate, postConnectDropToTemplate, postDrop } from "../helpers/DropHelper";
import { getInfoById, postInformation } from "../helpers/InfoHelper";
import { getTitleById, postTitle } from "../helpers/TitleHelper";
import { getMultimediaById, postMultimedia } from "../helpers/MultimediaHelper";

interface responseService{

    payload : any,
    status  : number,
    msg     : string
}



export const getAllTemplatesDrop       = ( pool: Pool ): responseService =>{
    return 
}



export const getTemplateByIdDrop       = async ( pool: Pool, id: number): Promise<responseService> =>{
    try{
      const dropTemplate = ( await pool.query("SELECT * FROM drop_template WHERE id_drop_template = $1", [id]) ).rows

      const drop_template = {
        id_drop_template: dropTemplate[0].id_drop_template,        
        type            : dropTemplate[0].type,
        title_1         : await getTitleById( dropTemplate[0].title_1_id, pool ),
        title_2         : await getTitleById( dropTemplate[0].title_2_id, pool ),
        information_1   : await getInfoById( dropTemplate[0].information_1_id, pool ),
        information_2   : await getInfoById( dropTemplate[0].information_2_id, pool ),
        banner_1        : await getMultimediaById( pool, dropTemplate[0].banner_1_id ),
        banner_2        : await getMultimediaById( pool, dropTemplate[0].banner_2_id ),
        multimedia_1    : await getMultimediaById( pool, dropTemplate[0].multimedia_1_id ),
        drop_1          : await getDropsByIdTemplate( dropTemplate[0].id_drop_template, pool, 1 ),
        drop_2          : await getDropsByIdTemplate( dropTemplate[0].id_drop_template, pool, 2 )
      }

      return { payload: drop_template, status: 200, msg: 'OK' }
    }catch(err ){ 
      return { payload: [], status: 500, msg:'Error en services/dropTemplateService/getTemplateByIdDrop: ' + err } 
    }
}


export const updateTemplateByIdDrop    = async ( pool: Pool, id: number, payload: DropTemplate ): Promise<responseService> =>{
  try {

    const drop_template_enviar: DropTemplate = {
      id_drop_template: payload.id_drop_template                            , 
      type            : payload.type                                        ,
      title_1         : await postTitle( pool, payload.title_1 )            ,
      title_2         : await postTitle( pool, payload.title_2 )            ,
      information_1   : await postInformation( payload.information_1, pool ),
      information_2   : await postInformation( payload.information_2, pool ),
      banner_1        : await postMultimedia( pool, payload.banner_1 )      ,
      banner_2        : await postMultimedia( pool, payload.banner_2 )      ,
      multimedia_1    : await postMultimedia( pool, payload.multimedia_1 )  ,
      drop_1          : await postDrop( payload.drop_1, pool )              ,
      drop_2          : await postDrop( payload.drop_2, pool )
    }     

    await pool.query("UPDATE drop_template SET title_1_id = $1, title_2_id = $2, information_1_id = $3, information_2_id = $4, banner_1_id = $5, banner_2_id = $6, multimedia_1_id = $7, type = $8 WHERE id_drop_template = $9"
                    ,[ drop_template_enviar.title_1.id_title, drop_template_enviar.title_2.id_title, drop_template_enviar.information_1.id_info_data, drop_template_enviar.information_2.id_info_data, drop_template_enviar.banner_1.id_multimedia, drop_template_enviar.banner_2.id_multimedia, drop_template_enviar.multimedia_1.id_multimedia, drop_template_enviar.type, drop_template_enviar.id_drop_template ])

    console.log("Paos")
    await deleteConnectDropToTemplate( pool, drop_template_enviar.id_drop_template )

    await postConnectDropToTemplate( pool, drop_template_enviar.drop_1, drop_template_enviar.id_drop_template, 1 )
    await postConnectDropToTemplate( pool, drop_template_enviar.drop_2, drop_template_enviar.id_drop_template, 2 )

    return { payload: [], status: 200, msg: "ok" }
  } catch (error) {
    return { payload: [], status: 500, msg:'Error en services/dropTemplateService/updateTemplateByIdDrop: ' + error } 
  }
}


export const postTemplateDrop          = async ( pool: Pool, payload: DropTemplate ): Promise<responseService> =>{

    try{

        //TODO: conectar los drops a la plantilla
        const dropsCreados1 = await postDrop( payload.drop_1, pool )
        const dropsCreados2 = await postDrop( payload.drop_2, pool )

        
        const infoCreado1 = await postInformation( payload.information_1, pool )
        const infoCreado2 = await postInformation( payload.information_2, pool )
        
        const titulo1     = await postTitle( pool, payload.title_1 )
        const titulo2     = await postTitle( pool, payload.title_2 )

        const banner1     = await postMultimedia( pool, payload.banner_1 )
        const banner2     = await postMultimedia( pool, payload.banner_2 )
        const multi1      = await postMultimedia( pool, payload.multimedia_1 )

        const drop_template_enviar: DropTemplateEnviar = {
          type            : payload.type           ,
          title_1_id      : titulo1.id_title        ,
          title_2_id      : titulo2.id_title        ,
          information_1_id: infoCreado1.id_info_data,
          information_2_id: infoCreado2.id_info_data,
          banner_1_id     : banner1.id_multimedia   ,
          banner_2_id     : banner2.id_multimedia   ,
          multimedia_1_id:  multi1.id_multimedia
        }

        await pool.query("BEGIN")
        await pool.query("INSERT INTO drop_template (type, title_1_id, title_2_id, information_1_id, information_2_id, banner_1_id, banner_2_id, multimedia_1_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
                        , [ drop_template_enviar.type, drop_template_enviar.title_1_id, drop_template_enviar.title_2_id, drop_template_enviar.information_1_id, drop_template_enviar.information_2_id, drop_template_enviar.banner_1_id, drop_template_enviar.banner_2_id, drop_template_enviar.multimedia_1_id ])

        const drops = await pool.query("SELECT * FROM drop_template")
        const dropCreado = drops.rows[ drops.rows.length - 1 ]

        await postConnectDropToTemplate(pool, dropsCreados1, dropCreado.id_drop_template, 1 )
        await postConnectDropToTemplate(pool, dropsCreados2, dropCreado.id_drop_template, 2 )

        return { payload: [], status: 200, msg: 'OK' }
    }catch( err ){
        
        return { payload: [], status: 500, msg:'Error en services/dropTemplateService/getAllTemplatesDrop: ' + err } 
    }
}




export const deleteTemplateByIdDrop    = ( pool: Pool, id: number): responseService =>{
    return 
}



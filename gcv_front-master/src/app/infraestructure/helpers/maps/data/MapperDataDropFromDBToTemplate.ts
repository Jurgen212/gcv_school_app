import { Injectable } from "@angular/core";
import { AMapperDataDropFromDBToTemplateServ } from "../../maps_abstract/AMapperDataDropFromDBToTemplateServ";
import { DropDataDB, DropFromDB, DropsDB, LinkDB } from "src/app/domain/models/Drop-template/DropFromDB";
import { DropTemplate } from "src/app/domain/models/Drop-template/DropTemplate";
import { DropData, Link, subDrop } from "src/app/domain/models/common/common-models";



@Injectable({
    providedIn: 'root'
})
export class MapperDataDropFromDBToTemplate extends AMapperDataDropFromDBToTemplateServ< DropFromDB, DropTemplate >{
    
    protected mapDBToDataDrop(entity: DropFromDB): DropTemplate {
        return {
            type            : entity.type,
            title_1         : {
                exist   : entity.title_1.exist      ,
                info    : entity.title_1.info_title ,
                size    : entity.title_1.f_size
            },
            title_2         : {
                exist   : entity.title_2.exist      ,
                info    : entity.title_2.info_title ,
                size    : entity.title_2.f_size
            },
            information_1   : {
                exist   : entity.information_1.exist    ,
                info    : entity.information_1.info     ,
                fontSize: entity.information_1.font_size,
                link    : convertirLinks( entity.information_1.link )
            },
            information_2   : {
                exist   : entity.information_2.exist    ,
                info    : entity.information_2.info     ,
                fontSize: entity.information_2.font_size,
                link    : convertirLinks( entity.information_2.link )
            },
            banner_1        : {
                a_link  : entity.banner_1.a_link        ,
                urlLink : entity.banner_1.url_content   ,
                isImg   : entity.banner_1.is_img        ,
                exist   : entity.banner_1.exist
            },
            banner_2        : {
                a_link  : entity.banner_2.a_link        ,
                urlLink : entity.banner_2.url_content   ,
                isImg   : entity.banner_2.is_img        ,
                exist   : entity.banner_2.exist
            },
            multimedia_1    : {
                a_link  : entity.multimedia_1.a_link    ,
                isImg   : entity.multimedia_1.is_img    ,
                exist   : entity.multimedia_1.exist     ,
                urlLink : entity.multimedia_1.url_content
            }, 
            drop_1          : convertirDrops( entity.drop_1 ),
            drop_2          : convertirDrops( entity.drop_2 )
        }       
    }
}

const convertirLinks = ( linksDB: LinkDB[] ): Link[] =>{
    let links: Link[] = []

    linksDB.forEach( link =>{
        links.push({
            text: link.text,
            url : link.url
        })
    })

    return links
}

const convertirDrops = ( dropsPrincipales: DropDataDB[] ): DropData[] =>{
    let drops: DropData[] = []

    dropsPrincipales.forEach( dropDB => {
        drops.push({
            title           : dropDB.title,
            exist           : dropDB.exist,
            fontSizeTitle   : dropDB.font_size_title,
            drop            : convertirSubDrops( dropDB.drop )
        })
    });
    return drops
}

const convertirSubDrops = ( drops: DropsDB[] ): subDrop[] =>{
    let subDrops: subDrop[] = []

    drops.forEach( subDropDB => {
        subDrops.push({
            isImg       : subDropDB.is_img,
            fontSizeData: subDropDB.font_size_data,
            urlImage    : subDropDB.url_image,
            info        : subDropDB.info,
            a_link      : subDropDB.a_link
        })
    });

    return subDrops
}



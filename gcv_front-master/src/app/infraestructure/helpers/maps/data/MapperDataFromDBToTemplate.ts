import { Injectable } from "@angular/core";
import { AMapperDataFromDBToTemplateServ } from "../../maps_abstract/AMapperDataFromDBToTemplateServ";
import { DataFromDB } from "src/app/domain/models/Data-template/DataFromDB";
import { DataTemplate } from "src/app/domain/models/Data-template/DataTemplate";
import { LinkDB } from "src/app/domain/models/Drop-template/DropFromDB";
import { Link } from "src/app/domain/models/common/common-models";


@Injectable({
    providedIn: 'root'
})
export class MapperDataFromDBToTemplateServ extends AMapperDataFromDBToTemplateServ< DataFromDB, DataTemplate >{

    protected override mapDBToDataTemplate(entity: DataFromDB): DataTemplate {
        return {
            type: entity.type,
            title: entity.title,
            image: entity.image,
            title_1: {
                exist   : entity.title_1.exist,
                info    : entity.title_1.info_title,
                size    : entity.title_1.f_size
            },
            title_2: {
                exist: entity.title_2.exist     ,
                info : entity.title_2.info_title,
                size : entity.title_2.f_size
            },
            information_1: {
                exist   : entity.information_1.exist                    ,
                info    : entity.information_1.info                     ,
                fontSize: entity.information_1.font_size                ,
                link    : convertirLinks( entity.information_1.link )
            }, 
            information_2: {
                exist   : entity.information_2.exist                ,
                info    : entity.information_2.info                 ,
                fontSize: entity.information_2.font_size            ,
                link    : convertirLinks( entity.information_2.link )
            }, 
            banner_1: {
                a_link  : entity.banner_1.a_link        ,
                urlLink : entity.banner_1.url_content   ,
                isImg   : entity.banner_1.is_img        ,
                exist   : entity.banner_1.exist
            },
            banner_2: {
                a_link  : entity.banner_2.a_link        ,
                urlLink : entity.banner_2.url_content   ,
                isImg   : entity.banner_2.is_img        ,
                exist   : entity.banner_2.exist
            },
            multimedia_1: {
                a_link  : entity.multimedia_1.a_link    ,
                isImg   : entity.multimedia_1.is_img    ,
                exist   : entity.multimedia_1.exist     ,
                urlLink : entity.multimedia_1.url_content
            },
            multimedia_2: {
                a_link  : entity.multimedia_2.a_link    ,
                isImg   : entity.multimedia_2.is_img    ,
                exist   : entity.multimedia_2.exist     ,
                urlLink : entity.multimedia_2.url_content
            }
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
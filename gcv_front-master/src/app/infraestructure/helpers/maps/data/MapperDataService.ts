import { DataTemplate } from "src/app/domain/models/Data-template/DataTemplate";
import { DataMapperService } from "../../maps_abstract/DataMapperServiceA";
import { Injectable } from "@angular/core";

import { Notices }          from "src/app/domain/models/Notices/Notices";
import { AboutUs }          from "src/app/domain/models/about-us/about-us";
import { Graduates }        from "src/app/domain/models/graduates/graduates";
import { SchoolParents }    from "src/app/domain/models/school parents/school-parents";


@Injectable()
export class DataMapperServiceImpl extends DataMapperService< Notices, DataTemplate >{

    protected mapNoticeToData(entity: Notices): DataTemplate {
        return {
            type            : entity.data.type              ,
            title           : entity.data.title             ,
            image           : entity.data.image             , 
            title_1         : entity.data.title_1           ,
            title_2         : entity.data.title_2           , 
            information_1   : entity.data.information_1     ,
            information_2   : entity.data.information_2     ,
            banner_1        : entity.data.banner_1          ,
            banner_2        : entity.data.banner_2          ,
            multimedia_1    : entity.data.multimedia_1      , 
            multimedia_2    : entity.data.multimedia_2      , 
        }       
    }
}



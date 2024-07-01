
import { Injectable }               from "@angular/core";
import { UsefulList }               from "src/app/domain/models/useful-lists/useful-lists";
import { DataDropMapperService }    from "../../maps_abstract/DataDropMapperService";
import { DropTemplate }             from "src/app/domain/models/Drop-template/DropTemplate";
import { FrequentQuestions }        from "src/app/domain/models/frecuent-questions/FrequentQuestions";
import { Schedule }                 from "src/app/domain/models/shedule/Schedule ";
import { WeekProgramator } from "src/app/domain/models/week-programator/week-programator";
import { ParentShedule } from "src/app/domain/models/parent-shedule/parent-shedule";


@Injectable()
export class DataMapperDropServiceImpl extends DataDropMapperService< UsefulList, DropTemplate >{

    protected mapObjectToDataDrop(entity: UsefulList | FrequentQuestions | Schedule | WeekProgramator | ParentShedule ): DropTemplate {
        return {
            type            : entity.type              ,
            title_1         : entity.title_1           ,
            title_2         : entity.title_2           , 
            information_1   : entity.information_1     ,
            information_2   : entity.information_2     ,
            banner_1        : entity.banner_1          ,
            banner_2        : entity.banner_2          ,
            multimedia_1    : entity.multimedia_1      , 
            drop_1          : entity.drop_1            ,
            drop_2          : entity.drop_2
        }       
    }
}



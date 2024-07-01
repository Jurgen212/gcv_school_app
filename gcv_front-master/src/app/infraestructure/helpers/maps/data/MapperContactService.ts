
import { Injectable }               from "@angular/core";
import { UsefulList }               from "src/app/domain/models/useful-lists/useful-lists";
import { DataDropMapperService }    from "../../maps_abstract/DataDropMapperService";
import { DropTemplate }             from "src/app/domain/models/Drop-template/DropTemplate";
import { FrequentQuestions }        from "src/app/domain/models/frecuent-questions/FrequentQuestions";
import { Schedule }                 from "src/app/domain/models/shedule/Schedule ";
import { WeekProgramator } from "src/app/domain/models/week-programator/week-programator";
import { ParentShedule } from "src/app/domain/models/parent-shedule/parent-shedule";
import { ContactMapperService } from "../../maps_abstract/ContactMapperService";
import { FormGroup } from "@angular/forms";
import { Contact } from '../../../../domain/models/contact/contact';


@Injectable()
export class MapperContactServiceImpl extends ContactMapperService< any, Contact >{

    protected mapFormToContact(entity: any ): Contact {
        return {
            name    : entity.name,
            mail    : entity.mail,
            message : entity.message
        }       
    }
}



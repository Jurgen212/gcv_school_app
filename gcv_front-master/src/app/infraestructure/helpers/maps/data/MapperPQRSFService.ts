import { Injectable } from "@angular/core";
import { PqrsfMapperService } from "../../maps_abstract/PqrsfMapperService";
import { pqrsf } from "src/app/domain/models/pqrsf/pqrsf";


@Injectable()
export class PqrsfMapperServiceImpl extends PqrsfMapperService< any, pqrsf >{

    protected mapObjectToPQRSF(entity: any): pqrsf {
        return {
            name    : entity.name,
            num_id  : entity.num_id + "",
            phone   : entity.phone  + "",
            mail    : entity.mail   + "",
            type    : entity.type   + "",
            message : entity.message,
        }       
    }
}



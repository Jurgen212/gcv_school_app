import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SchoolGovernmentGateway } from "../../models/school-government/gateway/school-governmetn-gateway";
import { SchoolGovernment } from "../../models/school-government/SchoolGovernment";
import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetSchoolGovernmentUseCase{

    constructor( private _SchoolGovernmentGateway: SchoolGovernmentGateway ){}

    getSchoolGovernment(): Observable<DataFromDB> | undefined{
        return this._SchoolGovernmentGateway.getSchoolGovernment()
    }
}
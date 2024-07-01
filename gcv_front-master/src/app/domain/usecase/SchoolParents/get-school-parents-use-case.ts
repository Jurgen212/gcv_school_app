import { Injectable } from "@angular/core";
import { NoticesGateway } from "../../models/Notices/gateway/Notices-gateway";
import { Observable } from "rxjs";
import { Notices } from "../../models/Notices/Notices";
import { SchoolParentsGateway } from "../../models/school parents/gateway/school-parents-gateway";
import { SchoolParents } from "../../models/school parents/school-parents";
import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetSchoolParentsUseCases{

    constructor( private _SchoolParentsGateway: SchoolParentsGateway ){}

    getSchoolParents(): Observable<DataFromDB> | undefined{
        return this._SchoolParentsGateway.getSchoolParents()
    }
}
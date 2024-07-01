import { Injectable }           from "@angular/core"                                        ;
import { Observable }           from "rxjs"                                                 ;
import { AdmissionsGateway }    from "../../models/admissions/gateway/admissions-gateway"   ;

import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetAdmissionsUseCase{

    constructor( private _AdmissionsGateway: AdmissionsGateway ){}

    getAdmissions(): Observable<DataFromDB> | undefined{
        return this._AdmissionsGateway.getAdmissions()
    }
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { parentSheduleGateway } from "../../models/parent-shedule/gateway/parent-shedule-gateway";
import { ParentShedule } from "../../models/parent-shedule/parent-shedule";
import { DropFromDB } from "../../models/Drop-template/DropFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetParentSheduleUseCase{

    constructor( private _ParentSheduleGateway: parentSheduleGateway ){}

    getParentShedule(): Observable<DropFromDB> | undefined{
        return this._ParentSheduleGateway.getParentShedule()
    }
}
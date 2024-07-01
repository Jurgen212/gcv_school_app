import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SheduleGateway } from "../../models/shedule/gateway/shedule-gateway";
import { DropFromDB } from "../../models/Drop-template/DropFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetScheduleUseCase{

    constructor( private _sheduleGateway: SheduleGateway ){}

    getShedule(): Observable<DropFromDB> | undefined{
        return this._sheduleGateway.getShedule()
    }
}
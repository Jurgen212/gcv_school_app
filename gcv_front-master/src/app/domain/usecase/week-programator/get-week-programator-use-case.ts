import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeekProgramatorGateway } from "../../models/week-programator/gateway/week-programator-gateway";
import { WeekProgramator } from "../../models/week-programator/week-programator";
import { DropFromDB } from "../../models/Drop-template/DropFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetWeekProgramatorUseCase{

    constructor( private _weekProgramatorGateway: WeekProgramatorGateway ){}

    getWeekProgramator(): Observable<DropFromDB> | undefined{
        return this._weekProgramatorGateway.getWeekProgramator()
    }
}
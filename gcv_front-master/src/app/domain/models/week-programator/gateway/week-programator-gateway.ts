import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { WeekProgramator } from "../week-programator";
import { DropFromDB } from "../../Drop-template/DropFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class WeekProgramatorGateway {
    abstract getWeekProgramator(): Observable<DropFromDB> | undefined;
}
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Schedule } from "../Schedule ";
import { DropFromDB } from "../../Drop-template/DropFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class SheduleGateway {
    abstract getShedule(): Observable<DropFromDB> | undefined;
}
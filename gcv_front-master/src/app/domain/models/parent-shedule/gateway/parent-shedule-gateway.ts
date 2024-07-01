import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ParentShedule } from "../parent-shedule";
import { DropFromDB } from "../../Drop-template/DropFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class parentSheduleGateway {
    abstract getParentShedule(): Observable<DropFromDB> | undefined;
}
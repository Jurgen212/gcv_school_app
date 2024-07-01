import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { DropFromDB } from "../../Drop-template/DropFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class UsefulListGateway {
    abstract getUsefulLists(): Observable<DropFromDB> | undefined;
}
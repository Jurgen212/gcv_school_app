import { Observable } from "rxjs";
import { Notices } from "../Notices";
import { Injectable } from "@angular/core";
import { DataFromDB } from "../../Data-template/DataFromDB";


@Injectable({
    providedIn: 'root'
})

export abstract class NoticesGateway {
    
    abstract getAllNotices(): Observable<any[]> | undefined;
}
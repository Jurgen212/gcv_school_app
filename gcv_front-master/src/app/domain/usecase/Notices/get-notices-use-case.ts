import { Injectable } from "@angular/core";
import { NoticesGateway } from "../../models/Notices/gateway/Notices-gateway";
import { Observable } from "rxjs";
import { Notices } from "../../models/Notices/Notices";
import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetNoticesUseCases{

    constructor( private _NoticesGateway: NoticesGateway ){}

    getAllNotices(): Observable<any[]> | undefined{
        return this._NoticesGateway.getAllNotices()
    }
}
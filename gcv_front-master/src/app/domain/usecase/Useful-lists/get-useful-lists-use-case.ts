import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsefulListGateway } from "../../models/useful-lists/gateway/usefil-lists-gateway";
import { DropFromDB } from "../../models/Drop-template/DropFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetUsefulListsUseCase{

    constructor( private _UsefulListsGateway: UsefulListGateway ){}

    getUsefulLists(): Observable<DropFromDB> | undefined{
        return this._UsefulListsGateway.getUsefulLists()
    }
}
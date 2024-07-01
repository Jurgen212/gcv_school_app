import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GraduatesGateway } from "../../models/graduates/gateway/graduates-gateway";
import { Graduates } from "../../models/graduates/graduates";
import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetGraduatesUseCase{

    constructor( private _GraduatesGateway: GraduatesGateway ){}

    getGraduates(): Observable<DataFromDB> | undefined{
        return this._GraduatesGateway.getGraduates()
    }
}
import { Injectable }       from "@angular/core";
import { Observable }       from "rxjs";
import { AboutUs }          from "../../models/about-us/about-us";
import { AboutUsGateway }   from "../../models/about-us/gateway/about-us-gateway";
import { DataFromDB } from "../../models/Data-template/DataFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetAboutUsUseCase{

    constructor( private _AboutUsGateway: AboutUsGateway ){}

    getAboutUs(): Observable<DataFromDB> | undefined{
        return this._AboutUsGateway.getAboutUs()
    }
}
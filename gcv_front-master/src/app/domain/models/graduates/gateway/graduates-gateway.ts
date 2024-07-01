import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Graduates } from "../graduates";
import { DataFromDB } from "../../Data-template/DataFromDB";


@Injectable({
    providedIn: 'root'
})

export abstract class GraduatesGateway {
    abstract getGraduates(): Observable<DataFromDB> | undefined;
}
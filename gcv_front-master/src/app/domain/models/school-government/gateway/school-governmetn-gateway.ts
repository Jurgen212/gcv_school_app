import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SchoolGovernment } from "../SchoolGovernment";
import { DataFromDB } from "../../Data-template/DataFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class SchoolGovernmentGateway {
    abstract getSchoolGovernment(): Observable<DataFromDB> | undefined;
}
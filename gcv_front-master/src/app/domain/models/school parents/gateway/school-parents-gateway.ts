import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { SchoolParents } from "../school-parents";
import { DataFromDB } from "../../Data-template/DataFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class SchoolParentsGateway {
    abstract getSchoolParents(): Observable<DataFromDB> | undefined;
}
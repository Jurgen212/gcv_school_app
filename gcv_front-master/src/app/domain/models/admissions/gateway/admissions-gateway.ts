import { Observable }   from "rxjs";
import { Injectable }   from "@angular/core";
import { DataFromDB } from "../../Data-template/DataFromDB";


@Injectable({
    providedIn: 'root'
})

export abstract class AdmissionsGateway {
    abstract getAdmissions(): Observable<DataFromDB> | undefined;
}
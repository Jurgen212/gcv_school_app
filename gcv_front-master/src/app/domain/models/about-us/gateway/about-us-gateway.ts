import { Observable }   from "rxjs";
import { Injectable }   from "@angular/core";
import { AboutUs }      from "../about-us";
import { DataFromDB } from "../../Data-template/DataFromDB";


@Injectable({
    providedIn: 'root'
})

export abstract class AboutUsGateway {
    abstract getAboutUs(): Observable<DataFromDB> | undefined;
}
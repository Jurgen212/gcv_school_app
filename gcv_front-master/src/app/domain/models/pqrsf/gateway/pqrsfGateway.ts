import { Observable }   from "rxjs";
import { Injectable }   from "@angular/core";
import { pqrsf } from "../pqrsf";


@Injectable({
    providedIn: 'root'
})

export abstract class pqrsfGateway {
    abstract sendPQRSF( message: pqrsf ): Observable<pqrsf> | undefined;
}
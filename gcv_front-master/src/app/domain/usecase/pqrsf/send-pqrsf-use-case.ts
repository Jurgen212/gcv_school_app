import { Injectable }       from "@angular/core";
import { Observable }       from "rxjs";
import { pqrsfGateway } from "../../models/pqrsf/gateway/pqrsfGateway";
import { pqrsf } from "../../models/pqrsf/pqrsf";

@Injectable({
    providedIn: 'root'
})

export class SendPQRSFUseCase{

    constructor( private _pqrsfGateway: pqrsfGateway ){}

    sendPQRSFMessage( message: pqrsf ): Observable<pqrsf> | undefined{
        return this._pqrsfGateway.sendPQRSF( message )
    }
}
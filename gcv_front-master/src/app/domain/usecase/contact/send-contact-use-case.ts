import { Injectable }       from "@angular/core";
import { Observable }       from "rxjs";
import { contactGateway } from "../../models/contact/gateway/ContactGateway";
import { Contact } from "../../models/contact/contact";

@Injectable({
    providedIn: 'root'
})

export class SendContactUseCase{

    constructor( private _contactGateway: contactGateway ){}

    sendContactMessage( message: Contact ): Observable<Contact> | undefined{
        return this._contactGateway.sendContactMessage( message )
    }
}
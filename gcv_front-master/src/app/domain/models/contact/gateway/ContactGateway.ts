import { Observable }   from "rxjs";
import { Injectable }   from "@angular/core";
import { Contact } from "../contact";


@Injectable({
    providedIn: 'root'
})

export abstract class contactGateway {
    abstract sendContactMessage( message: Contact ): Observable<Contact> | undefined;
}
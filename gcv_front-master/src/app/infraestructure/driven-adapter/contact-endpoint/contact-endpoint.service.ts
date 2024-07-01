import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from 'src/app/domain/models/contact/contact';
import { contactGateway } from 'src/app/domain/models/contact/gateway/ContactGateway';
import emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class ContactEndpointService extends contactGateway {
  
  constructor() {
    super();
  }

  sendContactMessage(message: Contact): any | undefined {

      emailjs.init('KnhGPGs3H9bcQDhut');

      return emailjs.send('service_6cz5q2v', 'template_b8u4fpe', {
        user_name : message.name,
        user_mail : message.mail,
        message   : message.message
      })
      
  }
}

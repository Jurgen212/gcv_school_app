import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { pqrsfGateway } from 'src/app/domain/models/pqrsf/gateway/pqrsfGateway';
import { pqrsf } from 'src/app/domain/models/pqrsf/pqrsf';
import emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class PqrsfEndpointService extends pqrsfGateway {

  constructor(    ) {
    super();
  }

  sendPQRSF(message: pqrsf): any | undefined {

      emailjs.init('KnhGPGs3H9bcQDhut');
      
      return emailjs.send('service_6cz5q2v', 'template_9w766p8', {
        from_type : message.type    ,
        user_mail : message.mail    ,
        user_name : message.name    ,
        user_phone: message.phone   ,
        num_id    : message.num_id  ,
        message   : message.message
      })
        
  }
}

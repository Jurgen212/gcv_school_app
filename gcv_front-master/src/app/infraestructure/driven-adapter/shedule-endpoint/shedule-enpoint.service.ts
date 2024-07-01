import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsefulListGateway } from 'src/app/domain/models/useful-lists/gateway/usefil-lists-gateway';
import { UsefulList } from '../../../domain/models/useful-lists/useful-lists';
import { listaUtilesShow } from 'src/app/db temporal/lista_utiles';
import { SheduleGateway } from 'src/app/domain/models/shedule/gateway/shedule-gateway';
import { Schedule } from 'src/app/domain/models/shedule/Schedule ';
import { sheduleShow } from 'src/app/db temporal/horarios';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DropFromDB } from 'src/app/domain/models/Drop-template/DropFromDB';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheduleEnpointService extends SheduleGateway{

  constructor( private http: HttpClient ) {
    super();
  }

  baseUrl: string = enviroments.URLSERVER + "/api/droptemplate/" + enviroments.IDS_GET.DROPTEMPLATE.SCHEDULE

  getShedule(): Observable<DropFromDB> | undefined {
    try{

      return  this.http.get<DropFromDB>( this.baseUrl )  
    } catch( error ){
      console.log("Error in getShedule() -> ", error )
      return undefined
    }
  }
}
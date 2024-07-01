import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { parentSheduleShow } from 'src/app/db temporal/horarios-padres';
import { DropFromDB } from 'src/app/domain/models/Drop-template/DropFromDB';
import { parentSheduleGateway } from 'src/app/domain/models/parent-shedule/gateway/parent-shedule-gateway';
import { ParentShedule } from 'src/app/domain/models/parent-shedule/parent-shedule';
import { enviroments } from 'src/app/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})

export class ParentSheduleEndpointService extends parentSheduleGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

  baseUrl: string = enviroments.URLSERVER + "/api/droptemplate/" + enviroments.IDS_GET.DROPTEMPLATE.PARENTSCHEDULE

    getParentShedule(): Observable<DropFromDB> | undefined {
      try {

        return  this.http.get<DropFromDB>( this.baseUrl )  
      } catch (error) {

        console.log("Error en getParentShedule() -> ", error )
        return undefined
      }
  }
}

import { Injectable } from '@angular/core';
import { WeekProgramator } from '../../../domain/models/week-programator/week-programator';
import { WeekProgramatorGateway } from 'src/app/domain/models/week-programator/gateway/week-programator-gateway';
import { weekProgramatorShow } from 'src/app/db temporal/programador-semanal';
import { Observable, of } from 'rxjs';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DropFromDB } from 'src/app/domain/models/Drop-template/DropFromDB';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeekProgramatorEndpointService extends WeekProgramatorGateway {

  constructor( private http: HttpClient ) {
    super();
  }

  baseUrl: string = enviroments.URLSERVER + "/api/droptemplate/" + enviroments.IDS_GET.DROPTEMPLATE.WEEKPROGRAMATOR

  getWeekProgramator(): Observable<DropFromDB> | undefined {
    try{

      return  this.http.get<DropFromDB>( this.baseUrl )  
    } catch( error ){
      console.log("Error in getWeekProgramator() -> ", error )
      return undefined
    }
  }

}

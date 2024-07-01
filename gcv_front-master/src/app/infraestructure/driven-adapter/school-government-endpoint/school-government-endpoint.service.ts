import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { schoolGovermentShow } from 'src/app/db temporal/Gobierno-escolar';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';
import { SchoolGovernment } from 'src/app/domain/models/school-government/SchoolGovernment';
import { SchoolGovernmentGateway } from 'src/app/domain/models/school-government/gateway/school-governmetn-gateway';
import { enviroments } from 'src/app/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class SchoolGovernmentEndpointService extends SchoolGovernmentGateway {
  
  constructor( private http: HttpClient ) { 
    super()
  }

  baseUrl: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.SCHOOLGOVERMENT

  getSchoolGovernment(): Observable<DataFromDB> | undefined {
    try {

      return  this.http.get<DataFromDB>( this.baseUrl )  
    } catch (error) {

      console.log("Error en getSchoolGovernment() -> ", error )
      return undefined
    }
  }
}

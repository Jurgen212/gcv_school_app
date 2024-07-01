import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { Observable, of }   from 'rxjs';
import { GraduatesGateway } from 'src/app/domain/models/graduates/gateway/graduates-gateway';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';

@Injectable({
  providedIn: 'root'
})

export class GraduatesEndpointService extends GraduatesGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

  baseUrl: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.EXSTUDENTS

    getGraduates(): Observable<DataFromDB> | undefined {
      try {

        return  this.http.get<DataFromDB>( this.baseUrl )  
      } catch (error) {

        console.log("Error en getGraduates() -> ", error )
        return undefined
      }
  }
}

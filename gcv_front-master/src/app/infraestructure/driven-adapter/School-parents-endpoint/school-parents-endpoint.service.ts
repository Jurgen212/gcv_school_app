import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable, of }       from 'rxjs';
import { SchoolParentsGateway } from 'src/app/domain/models/school parents/gateway/school-parents-gateway';
import { schoolParentsShow }    from 'src/app/db temporal/escuela-padres';
import { SchoolParents }        from 'src/app/domain/models/school parents/school-parents';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';


@Injectable({
  providedIn: 'root'
})

export class SchoolParentsEndpointService extends SchoolParentsGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

  baseUrl: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.PARENTS_SCHOOL
  
    getSchoolParents(): Observable<DataFromDB> | undefined {
      try {

        return  this.http.get<DataFromDB>( this.baseUrl )  
      } catch (error) {

        console.log("Error en getSchoolParents() -> ", error )
        return undefined
      }
  }
}

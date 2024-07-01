import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { enviroments } from 'src/app/enviroments/enviroments';
import { AdmissionsGateway } from 'src/app/domain/models/admissions/gateway/admissions-gateway';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';
import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class AdmissionsEndpointService extends AdmissionsGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

    baseUrl: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.ADMISSIONS

    getAdmissions(): Observable<DataFromDB> | undefined {
      try {
        
        return  this.http.get<DataFromDB>( this.baseUrl )      
        // return of( this.dataDBToTemplate.transform( this.prueba ));
      } catch (error) {

        console.log("Error en getAdmissions() -> ", error )
        return undefined
      }
  }
}

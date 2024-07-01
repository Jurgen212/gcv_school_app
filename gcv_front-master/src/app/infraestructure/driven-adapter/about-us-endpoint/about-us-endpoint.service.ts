import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { aboutUsShow }    from 'src/app/db temporal/quienes-somos';
import { AboutUsGateway } from 'src/app/domain/models/about-us/gateway/about-us-gateway';
import { AboutUs }        from 'src/app/domain/models/about-us/about-us';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';


@Injectable({
  providedIn: 'root'
})

export class AboutUsEndpointService extends AboutUsGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

    baseUrl: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.ABOUT_US

    getAboutUs(): Observable<DataFromDB> | undefined {
      try {

        return  this.http.get<DataFromDB>( this.baseUrl )  
      } catch (error) {

        console.log("Error en getAboutUs() -> ", error )
        return undefined
      }
  }
}

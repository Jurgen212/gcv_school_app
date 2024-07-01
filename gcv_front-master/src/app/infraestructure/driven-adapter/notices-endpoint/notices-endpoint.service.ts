import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';
import { NoticesGateway } from 'src/app/domain/models/Notices/gateway/Notices-gateway';
import { Notices }        from 'src/app/domain/models/Notices/Notices';
import { Observable, forkJoin, map, of } from 'rxjs';
import { noticesShow }    from 'src/app/db temporal/Noticias';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class NoticesEndpointService extends NoticesGateway {
  
  constructor( private http: HttpClient  ) { 
    super();  
  }


  baseUrl1: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.NOTICE1
  baseUrl2: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.NOTICE2
  baseUrl3: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.NOTICE3
  baseUrl4: string = enviroments.URLSERVER + "/api/datatemplate/" + enviroments.IDS_GET.DATATEMPLATE.NOTICE4

  getAllNotices(): Observable<any[]> | undefined{
 
      try {
         
        const request1 = this.getPetitionReques( this.baseUrl1 )
        const request2 = this.getPetitionReques( this.baseUrl2 )
        const request3 = this.getPetitionReques( this.baseUrl3 )
        const request4 = this.getPetitionReques( this.baseUrl4 )
        
        
        let contador: number = 1
        return forkJoin([ request1, request2, request3, request4 ]).pipe(
          map( results =>{
            const dataList = results.map( response =>{
              const notice_complete = {
                id_notice: contador + "",
                data     : response 
              }

              contador += 1
              return notice_complete 
            })
            return dataList
          })
        )
      } catch (error) {
        console.log("Error in getAllNotices() -> ", error)
        return undefined
      }
  }

  getPetitionReques( url: string ): Observable<any>{
      
      return this.http.get( url )
  }
}

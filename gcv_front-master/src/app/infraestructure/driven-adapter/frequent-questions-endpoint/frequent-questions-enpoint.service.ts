import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { frequentQuestionsShow } from 'src/app/db temporal/preguntas-frecuentes';
import { DropFromDB } from 'src/app/domain/models/Drop-template/DropFromDB';
import { FrequentQuestions } from 'src/app/domain/models/frecuent-questions/FrequentQuestions';
import { frequentQuestionsGateway } from 'src/app/domain/models/frecuent-questions/gateway/frequent-questions-gateway';
import { enviroments } from 'src/app/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionsEnpointService extends frequentQuestionsGateway {

  constructor( private http: HttpClient ) { 
    super();  
  }

  baseUrl: string = enviroments.URLSERVER + "/api/droptemplate/" + enviroments.IDS_GET.DROPTEMPLATE.FREQUENTQUESTIONS

    getFrequentQuestions(): Observable<DropFromDB> | undefined {
      try {

        return  this.http.get<DropFromDB>( this.baseUrl )  
      } catch (error) {

        console.log("Error en getFrequentQuestions() -> ", error )
        return undefined
      }
  }
}

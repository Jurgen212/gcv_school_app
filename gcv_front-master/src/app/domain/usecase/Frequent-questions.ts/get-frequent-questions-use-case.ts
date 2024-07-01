import { Injectable }       from "@angular/core";
import { Observable }       from "rxjs";
import { frequentQuestionsGateway } from "../../models/frecuent-questions/gateway/frequent-questions-gateway";
import { FrequentQuestions } from "../../models/frecuent-questions/FrequentQuestions";
import { DropFromDB } from "../../models/Drop-template/DropFromDB";

@Injectable({
    providedIn: 'root'
})

export class GetFrequentQuestionsUseCase{

    constructor( private _FrequentQuestionsGateway: frequentQuestionsGateway ){}

    getFrequentQuestions(): Observable<DropFromDB> | undefined{
        return this._FrequentQuestionsGateway.getFrequentQuestions()
    }
}
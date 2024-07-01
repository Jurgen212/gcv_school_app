import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { FrequentQuestions } from "../FrequentQuestions";
import { DropFromDB } from "../../Drop-template/DropFromDB";



@Injectable({
    providedIn: 'root'
})

export abstract class frequentQuestionsGateway {
    abstract getFrequentQuestions(): Observable<DropFromDB> | undefined;
}
import { Observable }   from "rxjs";
import { Injectable }   from "@angular/core";
import { CalendarData } from "../calendar";


@Injectable({
    providedIn: 'root'
})

export abstract class CalendarGateway {
    abstract getCalendar(): Observable<CalendarData[]> | undefined;
}
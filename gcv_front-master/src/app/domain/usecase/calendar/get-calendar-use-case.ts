import { Injectable }           from "@angular/core"                                        ;
import { Observable }           from "rxjs"                                                 ;
import { AdmissionsGateway }    from "../../models/admissions/gateway/admissions-gateway"   ;
import { Admissions }           from "../../models/admissions/admissions"                   ;
import { CalendarGateway } from "../../models/calendar/gateway/calendar-gateway";
import { CalendarData } from "../../models/calendar/calendar";

@Injectable({
    providedIn: 'root'
})

export class GetCalendarUseCase{

    constructor( private _CalendarGateway: CalendarGateway ){}

    getCalendar(): Observable<CalendarData[]> | undefined{
        return this._CalendarGateway.getCalendar()
    }
}
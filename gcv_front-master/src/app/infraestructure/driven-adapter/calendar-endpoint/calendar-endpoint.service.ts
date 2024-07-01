import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { calendarShow } from 'src/app/db temporal/Calendario';
import { CalendarData } from 'src/app/domain/models/calendar/calendar';
import { CalendarGateway } from 'src/app/domain/models/calendar/gateway/calendar-gateway';

@Injectable({
  providedIn: 'root'
})
export class CalendarEndpointService  extends CalendarGateway{
  
  constructor() { 
    super()
  }
  getCalendar(): Observable<CalendarData[]> | undefined {
    try {

      return of(calendarShow);
    } catch (error) {

      console.log("Error en getCalendar() -> ", error )
      return undefined
    }
  }
}

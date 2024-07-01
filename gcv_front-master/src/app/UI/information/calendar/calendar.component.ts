import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth, 
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { GetCalendarUseCase } from 'src/app/domain/usecase/calendar/get-calendar-use-case';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {

  events           !: CalendarEvent[];
  eventosSinParsear!: any[];


  constructor(  private modal       : NgbModal, 
                private calendarServ: GetCalendarUseCase ) {}

  ngOnInit(): void {
    this.parsearEventosDeDB()
  }

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();


  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  refresh = new Subject<void>();
  activeDayIsOpen: boolean = false;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if ( isSameMonth(date, this.viewDate )) {

      if (
        ( isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {

        this.activeDayIsOpen = false;

      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }


  eventTimesChanged({ event, newStart, newEnd, }: CalendarEventTimesChangedEvent ): void {
    
    this.events = this.events.map( (iEvent) => {

      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });

  }


  closeOpenMonthViewDay(){ 
    this.activeDayIsOpen = false; 
  }


  parsearEventosDeDB(): void {
    
    let eventos: any[] = [];

    this.calendarServ.getCalendar()
    ?.subscribe( data =>{
    
      if( data !== null ) this.eventosSinParsear = data
      else this.eventosSinParsear = [];


      
      this.eventosSinParsear.forEach(( valor  ) =>{

        valor.end   = new Date(  valor.end   );
        valor.start = new Date(  valor.start );        
        eventos.push( valor );
      })
      
      this.events = eventos
    })
    
  }
}

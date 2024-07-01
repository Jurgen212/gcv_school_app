import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InformationRoutingModule } from './information-routing.module';
import { CoexistenceManualComponent } from './coexistence-manual/coexistence-manual.component';
import { SheduleComponent } from './shedule/shedule.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';


import { PrincipalTemplateComponent } from '../components/temp/principal/principal-template/principal-template.component';
import { WeekProgramatorComponent } from './week-programator/week-programator.component';
import { PrincipalDropComponent } from '../components/temp/drop-temp/principal-drop/principal-drop.component';
import { DataMapperDropServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropService';


// Calendar
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Español
import localeEs               from '@angular/common/locales/es' ;
import { registerLocaleData } from '@angular/common'            ;
import { MapperContactServiceImpl } from '../../infraestructure/helpers/maps/data/MapperContactService';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';

registerLocaleData( localeEs, 'es' );

@NgModule({
  declarations: [
    CoexistenceManualComponent,
    SheduleComponent,
    AboutUsComponent,
    FrequentQuestionsComponent,
    CalendarComponent,
    ContactComponent,
    WeekProgramatorComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    PrincipalTemplateComponent,
    PrincipalDropComponent,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    LoaderSpinnerComponent
  ],
  providers: [ DataMapperDropServiceImpl, MapperContactServiceImpl, { provide: LOCALE_ID, useValue: 'es' } ]
})
export class InformationModule { }

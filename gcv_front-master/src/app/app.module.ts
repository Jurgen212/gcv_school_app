
// Angular importaciones
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { NavbarComponent }            from './components/navbar/navbar.component';
import { FooterComponent }            from './components/footer/footer.component';
import { MiddleOptionsComponent }     from './components/navbar/navbar-components/middle-options/middle-options.component';
import { PrincipalOptionsComponent }  from './components/navbar/navbar-components/principal-options/principal-options.component';
import { SocialMediaComponent }       from './components/navbar/navbar-components/social-media/social-media.component';
import { PrincipalNameComponent }     from './components/principal-name/principal-name.component';




//Providers de servicios
import { NoticesGateway }         from './domain/models/Notices/gateway/Notices-gateway';
import { NoticesEndpointService } from './infraestructure/driven-adapter/notices-endpoint/notices-endpoint.service';

import { SchoolParentsGateway } from './domain/models/school parents/gateway/school-parents-gateway';
import { SchoolParentsEndpointService } from './infraestructure/driven-adapter/School-parents-endpoint/school-parents-endpoint.service';

import { AboutUsGateway } from './domain/models/about-us/gateway/about-us-gateway';
import { AboutUsEndpointService } from './infraestructure/driven-adapter/about-us-endpoint/about-us-endpoint.service';

import { GraduatesGateway } from './domain/models/graduates/gateway/graduates-gateway';
import { GraduatesEndpointService } from './infraestructure/driven-adapter/graduates-endpoint/graduates-endpoint.service';

import { UsefulListGateway } from './domain/models/useful-lists/gateway/usefil-lists-gateway';
import { UsefulListsEndpointService } from './infraestructure/driven-adapter/useful-lists-endpoint/useful-lists-endpoint.service';

import { frequentQuestionsGateway } from './domain/models/frecuent-questions/gateway/frequent-questions-gateway';
import { FrequentQuestionsEnpointService } from './infraestructure/driven-adapter/frequent-questions-endpoint/frequent-questions-enpoint.service';

import { AdmissionsGateway } from './domain/models/admissions/gateway/admissions-gateway';
import { AdmissionsEndpointService } from './infraestructure/driven-adapter/admissions-endpoint/admissions-endpoint.service';

import { SheduleGateway } from './domain/models/shedule/gateway/shedule-gateway';
import { SheduleEnpointService } from './infraestructure/driven-adapter/shedule-endpoint/shedule-enpoint.service';

import { WeekProgramatorGateway } from './domain/models/week-programator/gateway/week-programator-gateway';
import { WeekProgramatorEndpointService } from './infraestructure/driven-adapter/week-programator-endpoint/week-programator-endpoint.service';

import { parentSheduleGateway } from './domain/models/parent-shedule/gateway/parent-shedule-gateway';
import { ParentSheduleEndpointService } from './infraestructure/driven-adapter/parent-shedule-endpoint/parent-shedule-endpoint.service';

import { SchoolGovernmentGateway } from './domain/models/school-government/gateway/school-governmetn-gateway';
import { SchoolGovernmentEndpointService } from './infraestructure/driven-adapter/school-government-endpoint/school-government-endpoint.service';

import { CalendarGateway } from './domain/models/calendar/gateway/calendar-gateway';
import { CalendarEndpointService } from './infraestructure/driven-adapter/calendar-endpoint/calendar-endpoint.service';
import { ToastrModule } from 'ngx-toastr';
import { ContactEndpointService } from './infraestructure/driven-adapter/contact-endpoint/contact-endpoint.service';
import { contactGateway } from './domain/models/contact/gateway/ContactGateway';
import { pqrsfGateway } from './domain/models/pqrsf/gateway/pqrsfGateway';
import { PqrsfEndpointService } from './infraestructure/driven-adapter/pqrsf-endpoint/pqrsf-endpoint.service';



@NgModule({
  declarations: [
    AppComponent              ,
    NavbarComponent           ,
    FooterComponent           ,
    MiddleOptionsComponent    ,
    PrincipalOptionsComponent ,
    SocialMediaComponent      ,
    PrincipalNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [  { provide: NoticesGateway           , useClass: NoticesEndpointService          },
                { provide: SchoolParentsGateway     , useClass: SchoolParentsEndpointService    },
                { provide: AboutUsGateway           , useClass: AboutUsEndpointService          },
                { provide: GraduatesGateway         , useClass: GraduatesEndpointService        },
                { provide: UsefulListGateway        , useClass: UsefulListsEndpointService      },
                { provide: frequentQuestionsGateway , useClass: FrequentQuestionsEnpointService },
                { provide: AdmissionsGateway        , useClass: AdmissionsEndpointService       },
                { provide: SheduleGateway           , useClass: SheduleEnpointService           },
                { provide: WeekProgramatorGateway   , useClass: WeekProgramatorEndpointService  },
                { provide: parentSheduleGateway     , useClass: ParentSheduleEndpointService    },
                { provide: SchoolGovernmentGateway  , useClass: SchoolGovernmentEndpointService },
                { provide: CalendarGateway          , useClass: CalendarEndpointService         },
                { provide: contactGateway           , useClass: ContactEndpointService          },
                { provide: pqrsfGateway             , useClass: PqrsfEndpointService            },
                { provide: LocationStrategy         , useClass: HashLocationStrategy            }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoexistenceManualComponent } from './coexistence-manual/coexistence-manual.component';
import { SheduleComponent } from './shedule/shedule.component';
import { FrequentQuestionsComponent } from './frequent-questions/frequent-questions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { WeekProgramatorComponent } from './week-programator/week-programator.component';

const routes: Routes = [
  { path: 'sobre-nosotros'        , component : AboutUsComponent            },
  { path: 'manual-convivencia'    , component : CoexistenceManualComponent  },
  { path: 'horario'               , component : SheduleComponent            },
  { path: 'preguntas-frecuentes'  , component : FrequentQuestionsComponent  },
  { path: 'calendario'            , component : CalendarComponent           },
  { path: 'contacto'              , component : ContactComponent            },
  { path: 'programador-semanal'   , component : WeekProgramatorComponent    }, 
  { path: '**'                    , redirectTo: 'horario'                   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }

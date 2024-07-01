import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';
import { LudicasActivitiesComponent } from './ludicas-activities/ludicas-activities.component';
import { UsefulListComponent } from './useful-list/useful-list.component';
import { PapazComponent } from './papaz/papaz.component';
import { PqrsfComponent } from './pqrsf/pqrsf.component';
import { ParentSchoolComponent } from './parent-school/parent-school.component';

const routes: Routes = [
  { path: 'horario-padres'        , component : ParentScheduleComponent    },
  { path: 'actividades-ludicas'   , component : LudicasActivitiesComponent },
  { path: 'utiles'                , component : UsefulListComponent        },
  { path: 'papaz'                 , component : PapazComponent             },
  { path: 'escuela-padres'        , component : ParentSchoolComponent      },
  { path: 'pqrsf'                 , component : PqrsfComponent             },
  { path: '**'                    , redirectTo: 'horario-padres'           }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }

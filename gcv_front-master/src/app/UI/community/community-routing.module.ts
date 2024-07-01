import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionsComponent } from './admissions/admissions.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { ExStudentComponent } from './ex-student/ex-student.component';

const routes: Routes = [
  { path: 'admisiones'    , component : AdmissionsComponent   },
  { path: 'egresados'     , component : GraduatesComponent    },
  { path: 'ex-estudiantes', component : ExStudentComponent    },
  { path: '**'            , redirectTo: 'admisiones'          }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolGovernmentComponent } from './school-government/school-government.component';

const routes: Routes = [
  { path: 'gobierno-escolar', component : SchoolGovernmentComponent         },
  { path: '**'              , redirectTo: 'gobierno-escolar'                }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

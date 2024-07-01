import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SchoolGovernmentComponent } from './school-government/school-government.component';
import { PrincipalTemplateComponent } from '../components/temp/principal/principal-template/principal-template.component';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    SchoolGovernmentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    PrincipalTemplateComponent,
    LoaderSpinnerComponent
  ]
})
export class StudentsModule { }

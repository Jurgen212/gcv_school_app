import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentScheduleComponent } from './parent-schedule/parent-schedule.component';
import { LudicasActivitiesComponent } from './ludicas-activities/ludicas-activities.component';
import { UsefulListComponent } from './useful-list/useful-list.component';
import { ParentSchoolComponent } from './parent-school/parent-school.component';
import { PapazComponent } from './papaz/papaz.component';
import { PqrsfComponent } from './pqrsf/pqrsf.component';
import { PrincipalTemplateComponent } from '../components/temp/principal/principal-template/principal-template.component';
import { PrincipalDropComponent } from '../components/temp/drop-temp/principal-drop/principal-drop.component';
import { DataMapperDropServiceImpl } from '../../infraestructure/helpers/maps/data/MapperDataDropService';
import { ReactiveFormsModule } from '@angular/forms';
import { PqrsfMapperServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperPQRSFService';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';


@NgModule({
  declarations: [
    ParentScheduleComponent,
    LudicasActivitiesComponent,
    UsefulListComponent,
    ParentSchoolComponent,
    PapazComponent,
    PqrsfComponent
  ],
  imports: [
    CommonModule          ,
    ParentsRoutingModule  ,
    PrincipalTemplateComponent,
    PrincipalDropComponent,
    ReactiveFormsModule,
    LoaderSpinnerComponent
  ],
  providers: [ DataMapperDropServiceImpl, PqrsfMapperServiceImpl ]
})
export class ParentsModule { }

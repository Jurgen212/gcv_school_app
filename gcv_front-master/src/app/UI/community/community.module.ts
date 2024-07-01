import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { AdmissionsComponent }    from './admissions/admissions.component';
import { GraduatesComponent }     from './graduates/graduates.component';
import { ExStudentComponent }     from './ex-student/ex-student.component';
import { GraduatesGateway } from 'src/app/domain/models/graduates/gateway/graduates-gateway';
import { GraduatesEndpointService } from 'src/app/infraestructure/driven-adapter/graduates-endpoint/graduates-endpoint.service';
import { PrincipalTemplateComponent } from '../components/temp/principal/principal-template/principal-template.component';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    AdmissionsComponent,
    GraduatesComponent,
    ExStudentComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    PrincipalTemplateComponent,
    LoaderSpinnerComponent
  ],
  providers: []
})
export class ComunityModule { }

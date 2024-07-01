
// Angular Data
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

// Components
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { PrincipalVideoComponent } from './principal-video/principal-video.component';
import { NoticesComponent } from './notices/notices.component';
import { NoticesListComponent } from './notices-list/notices-list.component';

// Providers
import { DataMapperServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataService';
import { PrincipalTemplateComponent } from '../components/temp/principal/principal-template/principal-template.component';

// Helps
import { MiniNoticesComponent } from '../components/temp/temp-subcomponents/mini-notices/mini-notices.component';
import { LoaderSpinnerComponent } from '../components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    PrincipalPageComponent,
    PrincipalVideoComponent,
    NoticesComponent,
    NoticesListComponent
  ],
  imports: [
    CommonModule              ,
    MainRoutingModule         ,
    PrincipalTemplateComponent,
    MiniNoticesComponent      ,
    LoaderSpinnerComponent
  ],
  providers: [  DataMapperServiceImpl ]
})
export class MainModule { }

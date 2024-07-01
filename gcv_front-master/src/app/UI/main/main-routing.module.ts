import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { NoticesComponent } from './notices/notices.component';

const routes: Routes = [
  { path: ''            , component: PrincipalPageComponent },
  { path: 'noticia/:id' , component: NoticesComponent       }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

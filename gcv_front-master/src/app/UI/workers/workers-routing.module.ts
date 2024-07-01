import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZetiComponent } from './zeti/zeti.component';

const routes: Routes = [
  { path: 'zeti', component : ZetiComponent },
  { path: '**'  , redirectTo: 'zeti'        }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { ZetiComponent } from './zeti/zeti.component';


@NgModule({
  declarations: [
    ZetiComponent
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule
  ]
})
export class WorkersModule { }

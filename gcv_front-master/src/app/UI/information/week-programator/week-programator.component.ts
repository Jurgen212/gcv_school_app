import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WeekProgramator } from 'src/app/domain/models/week-programator/week-programator';
import { WeekProgramatorEndpointService } from 'src/app/infraestructure/driven-adapter/week-programator-endpoint/week-programator-endpoint.service';
import { MapperDataDropFromDBToTemplate } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropFromDBToTemplate';
import { DataMapperDropServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropService';

@Component({
  selector: 'app-week-programator',
  templateUrl: './week-programator.component.html',
  styleUrls: ['./week-programator.component.css']
})
export class WeekProgramatorComponent {

  DropTemplate: WeekProgramator | undefined = undefined


  constructor(  private _weekProgramatorServ: WeekProgramatorEndpointService,
                private _DropMapperServ: DataMapperDropServiceImpl,
                private DropDBToTemplate: MapperDataDropFromDBToTemplate,
                private toast: ToastrService ){}

    
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
      this._weekProgramatorServ.getWeekProgramator()?.subscribe({
        next: ( data ) =>{
          this.DropTemplate = this.DropDBToTemplate.transform( data )
        },
        error : ( error ) =>{
          this.toast.error("Revise su conexión a internet e inténtelo de nuevo. Si persiste, comuníquese con nosotros al 2374060.", ":(");
          this.DropTemplate = undefined;
        }
      })
    }
}

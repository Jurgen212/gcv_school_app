import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DropTemplate } from 'src/app/domain/models/Drop-template/DropTemplate';
import { GetParentSheduleUseCase } from 'src/app/domain/usecase/parent-shedule/get-parent-shedule-use-case';
import { MapperDataDropFromDBToTemplate } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropFromDBToTemplate';
import { DataMapperDropServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropService';


@Component({
  selector: 'app-parent-schedule',
  templateUrl: './parent-schedule.component.html',
  styleUrls: ['./parent-schedule.component.css']
})
export class ParentScheduleComponent {

  DropTemplate: DropTemplate | undefined = undefined

  constructor(  private _parentSheduleServ: GetParentSheduleUseCase, 
                private _DropMapperServ   : DataMapperDropServiceImpl,
                private DropDBToTemplate  : MapperDataDropFromDBToTemplate,
                private toast             : ToastrService   ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._parentSheduleServ.getParentShedule()?.subscribe({
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

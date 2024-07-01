import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { GetSchoolGovernmentUseCase } from 'src/app/domain/usecase/school-government/get-school-government-use-case';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';

@Component({
  selector: 'app-school-government',
  templateUrl: './school-government.component.html',
  styleUrls: ['./school-government.component.css']
})
export class SchoolGovernmentComponent {

    data_template: DataTemplate | undefined = undefined;

    constructor(  private _SchoolGovernmentServ : GetSchoolGovernmentUseCase,
                  private dataDBToTemplate      : MapperDataFromDBToTemplateServ,
                  private toast                 : ToastrService ){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this._SchoolGovernmentServ.getSchoolGovernment()?.subscribe({
        next: ( data ) =>{
          this.data_template = this.dataDBToTemplate.transform( data )
        },
        error : ( error ) =>{
          this.toast.error("Revise su conexión a internet e inténtelo de nuevo. Si persiste, comuníquese con nosotros al 2374060.", ":(");
          this.data_template = undefined;
        }
      })
    }
}

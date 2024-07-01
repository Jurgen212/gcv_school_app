import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataFromDB } from 'src/app/domain/models/Data-template/DataFromDB';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { GetAdmissionsUseCase } from 'src/app/domain/usecase/admissions/get-admissions-use-case';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css']
})
export class AdmissionsComponent {

  data_template: DataTemplate | undefined = undefined;

  constructor( private _admissionsService: GetAdmissionsUseCase, private dataDBToTemplate: MapperDataFromDBToTemplateServ, private toast: ToastrService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._admissionsService.getAdmissions()?.subscribe({
      next: ( res ) =>{ 
        this.data_template = this.dataDBToTemplate.transform( res )
      },
      error: ( err ) =>{
        this.toast.error("Revise su conexión a internet e inténtelo de nuevo. Si persiste, comuníquese con nosotros al 2374060.", ":(");
        this.data_template = undefined
      }
    })

  }
}

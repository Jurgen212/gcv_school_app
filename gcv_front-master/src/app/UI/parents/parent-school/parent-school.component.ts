import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { GetSchoolParentsUseCases } from 'src/app/domain/usecase/SchoolParents/get-school-parents-use-case';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';

@Component({
  selector: 'app-parent-school',
  templateUrl: './parent-school.component.html',
  styleUrls: ['./parent-school.component.css']
})
export class ParentSchoolComponent {

  data_template: DataTemplate | undefined = undefined;

  constructor(  private _schoolParentsServ: GetSchoolParentsUseCases, private dataDBToTemplate: MapperDataFromDBToTemplateServ, private toast: ToastrService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this._schoolParentsServ.getSchoolParents()?.subscribe({
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


import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { GetGraduatesUseCase } from 'src/app/domain/usecase/Graduates/get-graduates-use-case';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';

@Component({
  selector: 'app-graduates',
  templateUrl: './graduates.component.html',
  styleUrls: ['./graduates.component.css']
})
export class GraduatesComponent {

  data_template : DataTemplate | undefined = undefined;

  constructor( private _GradutesServ: GetGraduatesUseCase, private dataDBToTemplate: MapperDataFromDBToTemplateServ, private toast: ToastrService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._GradutesServ.getGraduates()?.subscribe({
      next: ( res ) =>{ 
        this.data_template = this.dataDBToTemplate.transform(  res )
      },
      error: ( err ) =>{
        this.toast.error("Revise su conexión a internet e inténtelo de nuevo. Si persiste, comuníquese con nosotros al 2374060.", ":(");
        this.data_template = undefined
      }
    })
  }
}

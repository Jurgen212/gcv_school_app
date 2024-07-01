import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { GetAboutUsUseCase } from 'src/app/domain/usecase/About-us/get-about-use-case';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  data_template: DataTemplate | undefined = undefined;


  constructor( private _aboutUsServ: GetAboutUsUseCase,  private dataDBToTemplate: MapperDataFromDBToTemplateServ, private toast: ToastrService  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._aboutUsServ.getAboutUs()?.subscribe({
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

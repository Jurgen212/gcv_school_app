import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DropTemplate } from 'src/app/domain/models/Drop-template/DropTemplate';
import { GetUsefulListsUseCase } from 'src/app/domain/usecase/Useful-lists/get-useful-lists-use-case';
import { MapperDataDropFromDBToTemplate } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropFromDBToTemplate';
import { DataMapperDropServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropService';

@Component({
  selector: 'app-useful-list',
  templateUrl: './useful-list.component.html',
  styleUrls: ['./useful-list.component.css']
})
export class UsefulListComponent {
  
  DropTemplate: DropTemplate | undefined = undefined

  constructor(  private _usefulListServ: GetUsefulListsUseCase,
                private _DropMapperServ: DataMapperDropServiceImpl,
                private DropDBToTemplate: MapperDataDropFromDBToTemplate,
                private toast: ToastrService ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._usefulListServ.getUsefulLists()?.subscribe({
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

import { Component } from '@angular/core';
import { DropTemplate } from 'src/app/domain/models/Drop-template/DropTemplate';
import { GetUsefulListsUseCase } from 'src/app/domain/usecase/Useful-lists/get-useful-lists-use-case';
import { DataMapperDropServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropService';
import { FrequentQuestionsEnpointService } from '../../../infraestructure/driven-adapter/frequent-questions-endpoint/frequent-questions-enpoint.service';
import { MapperDataDropFromDBToTemplate } from 'src/app/infraestructure/helpers/maps/data/MapperDataDropFromDBToTemplate';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css']
})
export class FrequentQuestionsComponent {

  DropTemplate: DropTemplate | undefined = undefined
 

  constructor(  private _frequentQuestServ: FrequentQuestionsEnpointService,
                private _DropMapperServ: DataMapperDropServiceImpl,
                private DropDBToTemplate: MapperDataDropFromDBToTemplate,
                private toast: ToastrService){}

     
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._frequentQuestServ.getFrequentQuestions()?.subscribe({
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

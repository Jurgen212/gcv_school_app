import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { GetNoticesUseCases } from 'src/app/domain/usecase/Notices/get-notices-use-case';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent {

  constructor( private _getNoticesUseCase: GetNoticesUseCases, private toast: ToastrService ){}

  notices : any | null = null

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    
    this._getNoticesUseCase.getAllNotices()?.subscribe({
      next: ( res ) =>{ 
        this.setNoticesLocalStorage( res )
        this.notices = res
      },
      error: ( err ) =>{
        this.toast.error("Revise su conexión a internet e inténtelo de nuevo. Si persiste, comuníquese con nosotros al 2374060.", ":(");
        this.notices = undefined
      }
    });
  }

  setNoticesLocalStorage( notices: any[] ){
    localStorage.removeItem("notices")
    localStorage.setItem("notices", JSON.stringify( notices ) )
  }
}

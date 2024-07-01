import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


const asyncLocalStorage = {
  getItem( key: string) {
      return Promise.resolve().then(function () {
          return localStorage.getItem(key);
      });
  }
};


@Component({
  selector: 'app-notices-list',
  templateUrl: './notices-list.component.html',
  styleUrls: ['./notices-list.component.css']
})
export class NoticesListComponent {
  

  // private noticeServ: NoticesjsonService,
  constructor(  private router    : Router){}


  @Input() noticiasMostrar  : any | null = null;
  noticias         : any = []
  noHayNoticias    : boolean = true


  ngOnInit(): void {
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }


  redirection( id_notice: string  ){
    this.router.navigate([`/principal/noticia/${ id_notice }`])
  }


}



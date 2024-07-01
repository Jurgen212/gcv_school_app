import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {


  constructor() { }

  $emmiter = new EventEmitter()
  getScreenWidth   : number   = 0

  recibirCerrarNavbar(){

    this.getScreenWidth = window.innerWidth;
    
    if( this.getScreenWidth <= 768 ){
      
      this.$emmiter.emit()
    }
  }
}

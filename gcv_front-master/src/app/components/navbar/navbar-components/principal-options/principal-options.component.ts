import { Component } from '@angular/core';
import { NavbarService } from 'src/app/UI/services/navbar.service';

@Component({
  selector: 'app-principal-options',
  templateUrl: './principal-options.component.html',
  styleUrls: ['./principal-options.component.css']
})
export class PrincipalOptionsComponent {
  
  constructor( private navbarServ: NavbarService ){}
  
  cerrarNavbar(){
    this.navbarServ.recibirCerrarNavbar()
  }
}

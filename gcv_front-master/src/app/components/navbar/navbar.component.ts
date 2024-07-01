import { Component, HostListener }  from '@angular/core';
import {  Subscription }            from 'rxjs';
import { NavbarService }            from 'src/app/UI/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showNavbarBoolean: boolean  = true
  getScreenWidth   : number   = 0

  navbarServSuscription!: Subscription;

  constructor( private navbarServ: NavbarService ){

    this.navbarServSuscription = navbarServ.$emmiter.subscribe( () =>{
      this.showNavbar()
    })
  }

  ngOnInit(): void {
    
    this.validarTamanoPage()
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.navbarServSuscription.unsubscribe()
  }


  showNavbar(){

    this.showNavbarBoolean = !this.showNavbarBoolean
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.validarTamanoPage()
  }


  validarTamanoPage(){
    
    this.getScreenWidth = window.innerWidth;
    
    if( this.getScreenWidth > 768 ){
      this.showNavbarBoolean = true
    }
    else {
      this.showNavbarBoolean = false
    }
  }
}

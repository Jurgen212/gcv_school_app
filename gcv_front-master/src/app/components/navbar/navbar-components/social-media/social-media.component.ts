import { Component } from '@angular/core';
import { NavbarService } from 'src/app/UI/services/navbar.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  constructor(  private navbarServ: NavbarService ){}

pagosPSELink  !: string;
zetiLink      !: string;
facebookLink  !: string;
instagramLink !: string;
youtubeLink   !: string;

ngOnInit(): void {
//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//Add 'implements OnInit' to the class.

// this.linkServ.getLinks().then( data =>{
// this.convertirDeDBaRedes( data )
// })

this.convertirDeDBaRedes()
}


convertirDeDBaRedes(  ){

  this.pagosPSELink = 'https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=3080&searchedCategoryId=&searchedAgreementName=COL%20DIOCESANO%20GIM%20CENTRAL%20D%20VALLE'
  this.zetiLink     = 'https://www.zeti.co/login/?next=/dashboard//'
  this.facebookLink = 'https://www.facebook.com/colegiogimnasiocentraldelvalle'
  this.instagramLink= 'https://www.instagram.com/gimnasiocentralgcv/'
  this.youtubeLink  = 'https://www.youtube.com/watch?v=1Cn3mF9znAM'
}

cerrarNavbar(){
  this.navbarServ.recibirCerrarNavbar()
}
}

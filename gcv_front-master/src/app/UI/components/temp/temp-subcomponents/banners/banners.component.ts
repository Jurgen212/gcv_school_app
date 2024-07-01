import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BannerData, MultimediaData } from 'src/app/domain/models/Data-template/DataTemplate';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector    : 'app-banners',
  templateUrl : './banners.component.html' ,
  styleUrls   : ['./banners.component.css']  ,
  standalone  : true,
  imports     : [ CommonModule, SafePipe ]
})
export class BannersComponent {
  @Input() multimediaOptions !: MultimediaData;
  urlYoutube                  : string = ""

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log( this.multimediaOptions )
  }

  validarSiEsYoutube(): boolean {
    
    if( !this.multimediaOptions.urlLink.includes("www.youtube.com") ) return false

    //Organizar url para youtube
    const urlPart1 = "https://www.youtube.com/embed/"
    const urlPart2 = this.multimediaOptions.urlLink.substring(32)
    
    this.urlYoutube = urlPart1 + urlPart2
    return true
  }
}

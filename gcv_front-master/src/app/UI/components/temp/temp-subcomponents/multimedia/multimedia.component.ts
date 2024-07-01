import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MultimediaData } from 'src/app/domain/models/Data-template/DataTemplate';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css'],
  standalone: true,
  imports: [ CommonModule, SafePipe ]
})
export class MultimediaComponent {

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
    const urlPart2 = this.multimediaOptions.urlLink.split("/")[3].split("=")[1]
    this.urlYoutube = urlPart1 + urlPart2
    

    return true
  }
}

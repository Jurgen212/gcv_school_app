import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InfoData, TitleData } from 'src/app/domain/models/Data-template/DataTemplate';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  standalone: true,
  imports: [ CommonModule ]
})
export class InformationComponent {
  
  @Input() informationOptions!: InfoData  ;
  @Input() titleOptions      !: TitleData ;


  
  tamanoPxTitle: string = ''
  tamanoPxInfo : string = ''


  ngOnInit(): void {  
    
    this.informationOptions.info = this.informationOptions.info.split("<>").join("<br />");

    this.tamanoPxTitle = `font-size: ${ this.titleOptions.size }px;line-height: ${ this.titleOptions.size }px`
    this.tamanoPxInfo  = `font-size: ${ this.informationOptions.fontSize }px`
  }
}

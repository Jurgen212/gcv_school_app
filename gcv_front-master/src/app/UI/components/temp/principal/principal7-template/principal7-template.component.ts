import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  DataTemplate, InfoData, MultimediaData, TitleData } from 'src/app/domain/models/Data-template/DataTemplate';
import { MultimediaComponent } from '../../temp-subcomponents/multimedia/multimedia.component';
import { InformationComponent } from '../../temp-subcomponents/information/information.component';
import { BannersComponent } from '../../temp-subcomponents/banners/banners.component';


@Component({
  standalone: true,
  selector: 'app-principal7-template',
  templateUrl: './principal7-template.component.html',
  styleUrls: ['./principal7-template.component.css'],
  imports: [ CommonModule, MultimediaComponent, InformationComponent, BannersComponent ]
})
export class Principal7TemplateComponent {
  @Input() data !: DataTemplate;

      
  bannerOptionsPrincipal    !: MultimediaData;
  bannerOptionsSecondary    !: MultimediaData;
  
  multimediaOptionsPrincipal!: MultimediaData;
  multimediaOptionsSecondary!: MultimediaData;



  ngOnInit(): void {
    
    this.bannerOptionsPrincipal = this.data.banner_1 ;
    this.bannerOptionsSecondary = this.data.banner_2 ;

    this.multimediaOptionsPrincipal = this.data.multimedia_1;
    this.multimediaOptionsSecondary = this.data.multimedia_2;
  }

}

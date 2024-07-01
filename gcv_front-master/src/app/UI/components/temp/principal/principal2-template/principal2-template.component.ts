import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MultimediaComponent } from '../../temp-subcomponents/multimedia/multimedia.component';
import { DataTemplate, InfoData, MultimediaData, TitleData } from 'src/app/domain/models/Data-template/DataTemplate';
import { InformationComponent } from '../../temp-subcomponents/information/information.component';
import { BannersComponent } from '../../temp-subcomponents/banners/banners.component';



@Component({
  standalone: true,
  selector: 'app-principal2-template',
  templateUrl: './principal2-template.component.html',
  styleUrls: ['./principal2-template.component.css'],
  imports: [ CommonModule, MultimediaComponent, InformationComponent, BannersComponent ]
})
export class Principal2TemplateComponent {
  @Input() data !: DataTemplate;

      
  bannerOptionsPrincipal    !: MultimediaData;
  bannerOptionsSecondary    !: MultimediaData;
  
  multimediaOptionsPrincipal!: MultimediaData;
  multimediaOptionsSecondary!: MultimediaData;


  titleOptionsPrincipal     !: TitleData;
  titleOptionsSecondary     !: TitleData;

  informationOptionsPrincipal!: InfoData;
  informationOptionsSecondary!: InfoData;

  ngOnInit(): void {
    
    this.bannerOptionsPrincipal = this.data.banner_1 ;
    this.bannerOptionsSecondary = this.data.banner_2 ;

    this.multimediaOptionsPrincipal = this.data.multimedia_1;
    this.multimediaOptionsSecondary = this.data.multimedia_2;


    this.titleOptionsPrincipal = this.data.title_1;
    this.titleOptionsSecondary = this.data.title_2;

    this.informationOptionsPrincipal = this.data.information_1;
    this.informationOptionsSecondary = this.data.information_2;
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MultimediaData, TitleData, InfoData } from 'src/app/domain/models/Data-template/DataTemplate';
import { DropTemplate } from 'src/app/domain/models/Drop-template/DropTemplate';
import { DropData } from 'src/app/domain/models/common/common-models';
import { InformationComponent } from '../../temp-subcomponents/information/information.component';
import { MultimediaComponent } from '../../temp-subcomponents/multimedia/multimedia.component';
import { DropComponent } from '../../temp-subcomponents/drop/drop.component';
import { BannersComponent } from '../../temp-subcomponents/banners/banners.component';


@Component({
  selector: 'app-principal1-drop',
  templateUrl: './principal1-drop.component.html',
  styleUrls: ['./principal1-drop.component.css'],
  standalone: true,
  imports: [ CommonModule, MultimediaComponent, InformationComponent , DropComponent, BannersComponent ]
})
export class Principal1DropComponent {
  @Input() data !: DropTemplate;

    
  bannerOptionsPrincipal    !: MultimediaData;
  bannerOptionsSecondary    !: MultimediaData;
  
  multimediaOptionsPrincipal!: MultimediaData;

  titleOptionsPrincipal     !: TitleData;
  titleOptionsSecondary     !: TitleData;

  informationOptionsPrincipal!: InfoData;
  informationOptionsSecondary!: InfoData;

  dropInformationPrincipal   !: DropData[];
  dropInformationSecondary   !: DropData[];

  ngOnInit(): void {
    
    this.bannerOptionsPrincipal = this.data.banner_1 
    this.bannerOptionsSecondary = this.data.banner_2

    this.multimediaOptionsPrincipal = this.data.multimedia_1

    this.titleOptionsPrincipal = this.data.title_1
    this.titleOptionsSecondary = this.data.title_2

    this.informationOptionsPrincipal = this.data.information_1
    this.informationOptionsSecondary = this.data.information_2

    this.dropInformationPrincipal = this.data.drop_1
    this.dropInformationSecondary = this.data.drop_2
    
  }
}

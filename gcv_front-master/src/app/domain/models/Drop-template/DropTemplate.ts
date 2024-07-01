import { TitleData, InfoData, BannerData, MultimediaData } from "../Data-template/DataTemplate";
import { DropData } from "../common/common-models";



export interface DropTemplate {
    
    type            : number           ;
    title_1         : TitleData        ;
    title_2         : TitleData        ;
    information_1   : InfoData         ;
    information_2   : InfoData         ;
    banner_1        : BannerData       ;
    banner_2        : BannerData       ;
    multimedia_1    : MultimediaData   ;
    drop_1          : DropData[]       ;
    drop_2          : DropData[]       ;
}




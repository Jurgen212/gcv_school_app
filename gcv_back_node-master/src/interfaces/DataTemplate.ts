import { BannerData }       from "./BannerData";
import { InfoData }         from "./InfoData";
import { MultimediaData }   from "./MultimediaData";
import { TitleData }        from "./TitleData";

export interface DataTemplate {
    type            : number       ;
    title           : string       ;
    image           : string       ;
    title_1         : TitleData        ;
    title_2         : TitleData        ;
    information_1   : InfoData         ;
    information_2   : InfoData         ;
    banner_1        : BannerData       ;
    banner_2        : BannerData       ;
    multimedia_1    : MultimediaData   ;
    multimedia_2    : MultimediaData   ;
}
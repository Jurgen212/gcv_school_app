import { BannerData }       from "./BannerData";
import { DropData }         from "./DropData";
import { InfoData }         from "./InfoData";
import { MultimediaData }   from "./MultimediaData";
import { TitleData }        from "./TitleData";

export interface DropTemplate {
    id_drop_template?:number;
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


export interface DropTemplateEnviar{
    id_drop_template?:number;
    type            : number;
    title_1_id      : number;
    title_2_id      : number;
    information_1_id: number;
    information_2_id: number;
    banner_1_id     : number;
    banner_2_id     : number;
    multimedia_1_id : number;
}
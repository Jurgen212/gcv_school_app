export interface DataFromDB{
    type            : number       ;
    title           : string       ;
    image           : string       ;
    title_1         : TitleDataDB        ;
    title_2         : TitleDataDB        ;
    information_1   : InfoDataDB         ;
    information_2   : InfoDataDB         ;
    banner_1        : BannerDataDB       ;
    banner_2        : BannerDataDB       ;
    multimedia_1    : MultimediaDataDB   ;
    multimedia_2    : MultimediaDataDB   ;
}


interface TitleDataDB{
    id_title    : number    ;
    exist       : boolean   ;
    info_title  : string    ;
    f_size      : number    ;
}

interface InfoDataDB{
    id_info_data: number    ;
    exist       : boolean   ;
    info        : string    ;
    font_size   : number    ;
    link        : LinkDB[]  ;
}

interface LinkDB{
    id_link_data: number;
    text        : string;
    url         : string;
}

interface BannerDataDB{
    id_multimedia   : number    ;
    url_content     : string    ;
    is_img          : boolean   ;
    exist           : boolean   ;
    a_link          : string    ;
}

interface MultimediaDataDB{
    id_multimedia   : number    ;
    url_content     : string    ;
    is_img          : boolean   ;
    exist           : boolean   ;
    a_link          : string    ;
}
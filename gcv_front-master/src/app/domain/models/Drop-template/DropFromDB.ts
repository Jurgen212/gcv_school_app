export interface DropFromDB {
    
    type            : number             ;
    title_1         : TitleDataDB        ;
    title_2         : TitleDataDB        ;
    information_1   : InfoDataDB         ;
    information_2   : InfoDataDB         ;
    banner_1        : BannerDataDB       ;
    banner_2        : BannerDataDB       ;
    multimedia_1    : MultimediaDataDB   ;
    drop_1          : DropDataDB[]       ;
    drop_2          : DropDataDB[]       ;
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

export interface LinkDB{
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

export interface DropDataDB{
    id_drop_data:       number    ;
    title       :       string    ;
    exist       :       boolean   ;
    font_size_title :   number    ;
    drop            :   DropsDB[] ;
}

export interface DropsDB{
    id_sub_drop     : number    ;
    is_img          : boolean   ;
    font_size_data  : number    ;
    url_image       : string    ;
    info            : string    ;
    a_link          : string    ;
}
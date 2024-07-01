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

export interface TitleData{
    exist : boolean;
    info  : string ;
    size  : number ;
}

export interface InfoData{
    exist   : boolean       ;
    info    : string        ;
    fontSize: number        ;
    link    : LinkData[]    ;
}

export interface MultimediaData{
    a_link  : string   ;
    isImg   : boolean  ;
    exist   : boolean  ;  
    urlLink : string   ;
}

export interface LinkData{
    text: string;
    url : string;
}

export interface BannerData{
    a_link  : string;
    urlLink : string;
    isImg   : boolean;
    exist   : boolean;
}
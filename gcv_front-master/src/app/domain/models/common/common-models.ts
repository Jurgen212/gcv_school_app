
export interface Title{
    exist : boolean;
    info  : string ;
    size  : number ;
}

export interface Info{

    exist   : boolean  ;
    info    : string   ;
    fontSize: number   ;
    link    : Link[]   ;
}


export interface Multimedia{

    a_link  : string   ;
    isImg   : boolean  ;
    exist   : boolean  ;  
    urlLink : string   ;
}

export interface Banner{

    a_link  : string   ;
    isImg   : boolean  ;
    exist   : boolean  ;  
    urlLink : string   ;
}

export interface Link{
    text: string;
    url : string;
}


export interface DropData{

    title           : string    ;
    exist           : boolean   ;
    fontSizeTitle   : number    ;
    drop            : subDrop[] ;
}


export interface subDrop{
    isImg       : boolean   ;
    fontSizeData:number     ;
    urlImage    : string    ; 
    info        : string    ; 
    a_link      : string    ;
}
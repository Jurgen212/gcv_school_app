import { Info, Banner, Multimedia, Title } from "../common/common-models";

export interface Graduates {

    type            : number       ;
    title           : string       ;
    image           : string       ;
    title_1         : Title        ;
    title_2         : Title        ;
    information_1   : Info         ;
    information_2   : Info         ;
    banner_1        : Banner       ;
    banner_2        : Banner       ;
    multimedia_1    : Multimedia   ;
    multimedia_2    : Multimedia   ;
}

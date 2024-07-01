
import { Info, Banner, Multimedia, Title, DropData } from "../common/common-models";

export interface Schedule {

    type            : number       ;
    title_1         : Title        ;
    title_2         : Title        ;
    information_1   : Info         ;
    information_2   : Info         ;
    banner_1        : Banner       ;
    banner_2        : Banner       ;
    multimedia_1    : Multimedia   ;
    drop_1          : DropData[]   ;
    drop_2          : DropData[]   ;
}

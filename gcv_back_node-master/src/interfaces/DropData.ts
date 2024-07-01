import { subDrop } from "./SubDrop";

export interface DropData{
    id_drop_data   ?: number    ;    
    title           : string    ;
    exists          : boolean   ;
    fontSizeTitle   : number    ;
    drop            : subDrop[] ;
}

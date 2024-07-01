import { Pool } from "pg";

export interface MultimediaData{
    id_multimedia?: number;
    a_link  : string   ;
    isImg   : boolean  ;
    exists  : boolean  ;  
    urlLink : string   ;
}


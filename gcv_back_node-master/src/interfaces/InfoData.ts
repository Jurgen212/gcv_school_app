import { LinkData } from "./LinkData";

export interface InfoData{
    id_info_data?: number; 
    exists  : boolean  ;
    info    : string   ;
    fontSize: number   ;
    link    : LinkData[]   ;
}

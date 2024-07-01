import { BannerData } from "../interfaces/BannerData";
import { DropData } from "../interfaces/DropData";
import { InfoData } from "../interfaces/InfoData";
import { LinkData } from "../interfaces/LinkData";
import { MultimediaData } from "../interfaces/MultimediaData";
import { subDrop } from "../interfaces/SubDrop";
import { TitleData } from "../interfaces/TitleData";

export interface ISubService{

    postRow     ( payload: TitleData | BannerData | DropData | InfoData | LinkData | MultimediaData | subDrop )             : number
    updateRow   ( id: number, payload: TitleData | BannerData | DropData | InfoData | LinkData | MultimediaData | subDrop ) : number
    getRow      ( id: number ): any
    deleteRow   ( id: number ): void
}
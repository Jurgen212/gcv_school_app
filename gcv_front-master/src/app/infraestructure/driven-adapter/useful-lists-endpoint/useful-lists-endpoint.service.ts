import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsefulListGateway } from 'src/app/domain/models/useful-lists/gateway/usefil-lists-gateway';
import { UsefulList } from '../../../domain/models/useful-lists/useful-lists';
import { listaUtilesShow } from 'src/app/db temporal/lista_utiles';
import { MapperDataDropFromDBToTemplate } from '../../helpers/maps/data/MapperDataDropFromDBToTemplate';
import { enviroments } from 'src/app/enviroments/enviroments';
import { DropFromDB } from 'src/app/domain/models/Drop-template/DropFromDB';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsefulListsEndpointService extends UsefulListGateway {

  constructor( private http: HttpClient ) {
    super();
  }

  baseUrl: string = enviroments.URLSERVER + "/api/droptemplate/" + enviroments.IDS_GET.DROPTEMPLATE.USEFULLIST

  getUsefulLists(): Observable<DropFromDB> | undefined {
    try{

        return  this.http.get<DropFromDB>( this.baseUrl )  
    } catch( error ){
      console.log("Error in getUsefulLists -> ", error )
      return undefined
    }
  }
}


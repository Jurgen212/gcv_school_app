import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Notices } from 'src/app/domain/models/Notices/Notices';
import { DataTemplate } from 'src/app/domain/models/Data-template/DataTemplate';
import { MapperDataFromDBToTemplateServ } from 'src/app/infraestructure/helpers/maps/data/MapperDataFromDBToTemplate';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css'],
})
export class NoticesComponent {
  
  notices        : Notices[]= [];
  data_template !: DataTemplate ;

  constructor(  @Inject(DOCUMENT) document: any                   ,
                private           router  : Router                ,
                private    MapperDataDBToTemp: MapperDataFromDBToTemplateServ ){}



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    const id_notice: string = document.location.href.split("/")[6]
    this.getNoticeById( id_notice )
  }

  getNoticeById( id: string ){

    const notices = localStorage.getItem("notices") 

    if( this.returnToMain( notices ) ) return
    
    const notices_list  = JSON.parse( notices! )
    
    this.notices = notices_list
    const notice        = notices_list.filter( ( not: any ) => not.id_notice == id  )[0]

    if( this.returnToMain( notice )) return 
    this.convertirNoticiaToData( notice.data )
  }

  convertirNoticiaToData( noticia: any ){
    this.data_template = this.MapperDataDBToTemp.transform( noticia )
  }


  returnToMain( notices: any ): boolean {
    if( notices == null || notices == undefined ){
      this.router.navigate(['/principal'])
      return true
    }
    return false
  }

  ngAfterViewInit() {
    // Espera un corto tiempo para asegurarse de que el contenido esté cargado
    setTimeout(() => {
      this.scrollToTop();
    }, 0);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { CommonModule  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Notices } from 'src/app/domain/models/Notices/Notices';

@Component({
  selector    : 'app-mini-notices',
  templateUrl : './mini-notices.component.html',
  styleUrls   : ['./mini-notices.component.css'],
  standalone  : true                            ,
  imports     : [ CommonModule ]
})
export class MiniNoticesComponent {


  @Input() notices!: any[]
  noticiasMostrar !: Notices[]
  

  rutasSubscription      !: Subscription

  ngOnInit(): void {
    
    
    this.noticiasMostrar = this.obtenerPrimeras4Noticias()

    //Atento a cambio en el path para redireccion
    this.rutasSubscription = this.router.events.pipe(
      filter(( event ) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      if( event['url'].includes('/principal/noticia/')){

        location.reload()
         this.router.navigate([event['url']])
      }
    });    
  }

  constructor(  private router: Router ){}


  obtenerIdActual(): string{
    return this.router.url.split('/')[3]
  }

  ngOnDestroy(): void {
    this.rutasSubscription.unsubscribe()
  }

  obtenerPrimeras4Noticias(): Notices[]{
    
    let primerasCuatroArr: Notices[] = this.notices.slice(0,4)
    
    // const primerasCuatro    = primerasCuatroArr.map( notice => notice[1] )

    primerasCuatroArr = this.eliminarNoticiaActiva( primerasCuatroArr,  this.obtenerIdActual() )

    const primerasCuatroStringArreglado = primerasCuatroArr.map( (notice: Notices ) =>{
      notice.data.information_1.info           = notice.data.information_1.info.replace("<><>", " ")
      return notice
    })
    return primerasCuatroStringArreglado
  }

  eliminarNoticiaActiva( lista: Notices[], indice: string ): Notices[]{
    for(var i =  lista.length - 1; i >= 0; i--) {
      if( lista[i].id_notice ===  indice) {
          lista.splice(i, 1);
      }
    }
  return lista
  } 


  redireccion( id_notice: string  ){
    this.router.navigate([`/principal/noticia/${ id_notice }`])
  }
}

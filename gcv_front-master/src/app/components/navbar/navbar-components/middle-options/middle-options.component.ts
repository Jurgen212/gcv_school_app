import { Component } from '@angular/core';
import { NavbarService } from 'src/app/UI/services/navbar.service';
import { enviroments } from 'src/app/enviroments/enviroments';

@Component({
  selector: 'app-middle-options',
  templateUrl: './middle-options.component.html',
  styleUrls: ['./middle-options.component.css']
})
export class MiddleOptionsComponent {

  constructor(  private navbarServ: NavbarService ){}

  correo_contacto: string = "/informacion/contacto";

  base_url: string = enviroments.BASEURL

  rutasMostrar: any = {
  padres_subelements      : [],
  estudiantes_subelements : [],
  personal_subelements    : []
  }


  padres_ver      : boolean = false;
  estudiantes_ver : boolean = false;
  trabajadores_ver: boolean = false;

  zeti_link: string = "https://www.zeti.co/login/?next=/dashboard//"
  ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  // this.linkServ.getLinks().then( data =>{
  // this.convertirDeDBaListas( data )
  // })
  }


  getRouterLink( link: any ){
    return [link]
  }

  // convertirDeDBaListas( dataDB:Links  ){
  convertirDeDBaListas( dataDB: any ){

  let arrPadres = []
  let arrEstudiantes = []
  let arrPersonal = []


  if ( dataDB.padres.r1[0] !== '' ){ arrPadres.push( { name:  dataDB.padres.r1[0], link: dataDB.padres.r1[1] } ) }
  if ( dataDB.padres.r2[0] !== '' ){ arrPadres.push( { name:  dataDB.padres.r2[0], link: dataDB.padres.r2[1] } ) }
  if ( dataDB.padres.r3[0] !== '' ){ arrPadres.push( { name:  dataDB.padres.r3[0], link: dataDB.padres.r3[1] } ) }
  if ( dataDB.padres.r4[0] !== '' ){ arrPadres.push( { name:  dataDB.padres.r4[0], link: dataDB.padres.r4[1] } ) }
  if ( dataDB.padres.r5[0] !== '' ){ arrPadres.push( { name:  dataDB.padres.r5[0], link: dataDB.padres.r5[1] } ) }


  if ( dataDB.estudiantes.r1[0] !== '' ){ arrEstudiantes.push( { name:  dataDB.estudiantes.r1[0], link: dataDB.estudiantes.r1[1] } ) }
  if ( dataDB.estudiantes.r2[0] !== '' ){ arrEstudiantes.push( { name:  dataDB.estudiantes.r2[0], link: dataDB.estudiantes.r2[1] } ) }
  if ( dataDB.estudiantes.r3[0] !== '' ){ arrEstudiantes.push( { name:  dataDB.estudiantes.r3[0], link: dataDB.estudiantes.r3[1] } ) }
  if ( dataDB.estudiantes.r4[0] !== '' ){ arrEstudiantes.push( { name:  dataDB.estudiantes.r4[0], link: dataDB.estudiantes.r4[1] } ) }
  if ( dataDB.estudiantes.r5[0] !== '' ){ arrEstudiantes.push( { name:  dataDB.estudiantes.r5[0], link: dataDB.estudiantes.r5[1] } ) }




  if ( dataDB.personal.r1[0] !== '' ){ arrPersonal.push( { name:  dataDB.personal.r1[0], link: dataDB.personal.r1[1] } ) }
  if ( dataDB.personal.r2[0] !== '' ){ arrPersonal.push( { name:  dataDB.personal.r2[0], link: dataDB.personal.r2[1] } ) }
  if ( dataDB.personal.r3[0] !== '' ){ arrPersonal.push( { name:  dataDB.personal.r3[0], link: dataDB.personal.r3[1] } ) }
  if ( dataDB.personal.r4[0] !== '' ){ arrPersonal.push( { name:  dataDB.personal.r4[0], link: dataDB.personal.r4[1] } ) }
  if ( dataDB.personal.r5[0] !== '' ){ arrPersonal.push( { name:  dataDB.personal.r5[0], link: dataDB.personal.r5[1] } ) }



  this.rutasMostrar.padres_subelements      = arrPadres
  this.rutasMostrar.estudiantes_subelements = arrEstudiantes
  this.rutasMostrar.personal_subelements    = arrPersonal

  }



  mostrar_subcomponente_padres(){

  if( this.padres_ver ){
  //Si ya esta abierto, solo lo cierra
  this.esconder_subcomponentes()
  return
  }

  this.padres_ver       = true  ;
  this.estudiantes_ver  = false ;
  this.trabajadores_ver = false ;
  }


  lista_opciones_padres(){
  return [
  { name: 'Programador semanal'                                               , link: `/informacion/programador-semanal`},
  { name: 'Horario de atención a padres de familia.'                          , link: `/padres/horario-padres`},
  // { name: 'Actividades lúdicas'                                               , link: `/padres/actividades-ludicas`},
  { name: 'Lista de útiles'                                                   , link: `/padres/utiles`},
  { name: 'Gobierno escolar'                                                  , link: `/estudiantes/gobierno-escolar`},
  // { name: 'Manual de convivencia'                                             , link: `/informacion/manual-convivencia`},
  // { name: 'RED PAPAZ'                                                         , link: `https://www.redpapaz.org/`},
  { name: 'Preguntas frecuentes'                                              , link: `/informacion/preguntas-frecuentes`},
  { name: 'PQRSF'                                                             , link: `/padres/pqrsf`}
  ]
  }

  lista_opciones_estudiantes(){
  return [
  { name: 'Programador semanal'                                 , link: `/informacion/programador-semanal`},
  // { name: 'Actividades lúdicas'                                 , link: `/padres/actividades-ludicas`},
  { name: 'Gobierno escolar'                                    , link: `/estudiantes/gobierno-escolar`},
  // { name: 'Manual de convivencia'                               , link: `/informacion/manual-convivencia`}
  ]
  }


  lista_opciones_personal(){
  return [  
    { name: 'Programador semanal'                                               , link: `/informacion/programador-semanal`},
    { name: 'Horario de atención a padres de familia.'                          , link: `/padres/horario-padres`},
    { name: 'Gobierno escolar'                                                  , link: `/estudiantes/gobierno-escolar`},
    // { name: 'Manual de convivencia'                                             , link: `/informacion/manual-convivencia`}
  ]
  }

  mostrar_subcomponente_estudiantes(){
  if( this.estudiantes_ver ){
  //Si ya esta abierto, solo lo cierra
  this.esconder_subcomponentes()
  return
  }
  this.estudiantes_ver  = true  ;
  this.padres_ver       = false ;
  this.trabajadores_ver = false ;
  }


  mostrar_subcomponente_trabajadores(){

  if( this.trabajadores_ver ) {
  //Si ya esta abierto, solo lo cierra
  this.esconder_subcomponentes()
  return
  }
  this.trabajadores_ver = true  ;
  this.padres_ver       = false ;
  this.estudiantes_ver  = false ;
  }


  esconder_subcomponentes(){
  this.padres_ver       = false             ;
  this.estudiantes_ver  = false                 ;
  this.trabajadores_ver = false                 ;
  }


  cerrarNavbar(){
  this.navbarServ.recibirCerrarNavbar()
  }
}

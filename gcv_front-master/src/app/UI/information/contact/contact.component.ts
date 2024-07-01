import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageService } from '../../services/error-message.service';
import { ToastrService } from 'ngx-toastr';
import { MapperContactServiceImpl } from '../../../infraestructure/helpers/maps/data/MapperContactService';
import { ContactEndpointService } from 'src/app/infraestructure/driven-adapter/contact-endpoint/contact-endpoint.service';
import { Map, marker, popup, tileLayer } from 'leaflet'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(  private fb                : FormBuilder             ,
                private transErr          : ErrorMessageService     ,
                private toastr            : ToastrService           ,
                private _contactMapperServ: MapperContactServiceImpl,
                private contactServ       : ContactEndpointService  ){}

  contactForm: FormGroup = this.fb.group({
    'name'    : [ , [ Validators.required, Validators.minLength(5), Validators.maxLength( 50 ), Validators.pattern(/^[a-zA-Z\s]+$/)] ],
    'mail'    : [ , [ Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ]]                     ,
    'message' : [ , [ Validators.required, Validators.maxLength( 500 ) ] ]
  })

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const map = new Map('map').setView([3.8960667567151175, -76.29510117705618], 15);
    
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	        maxZoom: 19,
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo( map )

    popup().setLatLng( [3.8959967567151175, -76.29510117705618] ).setContent("<p>Colegio Diocesano Gimnasio Central del Valle</p>").openOn( map )
    marker([3.8956667567151175, -76.29510117705618]).addTo(map)
  }

  sendForm(){

    if( this.contactForm.invalid ) { 
      this.showError()
      return
    }
    this.sendData()
  }

  sendData(){

      this.contactServ.sendContactMessage( this._contactMapperServ.transform( this.contactForm.value ) )?.then((response: any) => {


        
        this.toastr.success("Pronto nos contactaremos con usted", "Mensaje enviado con exito")
        this.contactForm.setValue({
          'name'    : '',
          'mail'    : '',
          'message' : ''
        })
      })
      .catch((error: any ) => {
      
        this.toastr.error("Por favor reporte este error al teléfono 2374060", "Error interno")
        console.log("Error -> ", error )
      });
    
  }



  showError() {

    const invalidValidators: { [key: string]: string[] } =  this.transErr.getInvalidValidators( this.contactForm ) 
    // Devuelven false cuando no hay error
    if        ( this.validateRequired ( invalidValidators ) ) return
    else if   ( this.validateName     ( invalidValidators ) ) return
    else if   ( this.validateMail     ( invalidValidators ) ) return 
    else if   ( this.validateMessage  ( invalidValidators ) ) return
    return 
  }

  validateRequired( invalidValidators: { [key: string]: string[] } ): boolean {

    const validationName    : boolean = invalidValidators["name"]     !== undefined && invalidValidators["name"].includes("required")
    const validationMail    : boolean = invalidValidators["mail"]     !== undefined && invalidValidators["mail"].includes("required")
    const validationMessage : boolean = invalidValidators["message"]  !== undefined && invalidValidators["message"].includes("required")

    if(  validationName ||  validationMail || validationMessage){

      this.toastr.error("Todos los campos son obligatorios", "Error en formulario")
      return true
    }

    return false
  }


  validateName(  invalidValidators: { [key: string]: string[] }  ): boolean {


    const validateName : boolean = ( invalidValidators["name"] === undefined )

    if( validateName ) return false
    this.toastr.error("El nombre debe tener entre 5 y 50 letras, sin números ni caracteres especiales", "Error en campo NOMBRE")
    return true
  }

  validateMail( invalidValidators: { [key: string]: string[] }  ): boolean {

    const validateMail: boolean = invalidValidators["mail"] === undefined

    if( validateMail ) return false
    this.toastr.error("Ingrese un correo válido", "Error en campo CORREO")
    return true
  }

  validateMessage( invalidValidators: { [key: string]: string[] }  ): boolean {

    const validateMessage: boolean = invalidValidators["message"] === undefined

    if( validateMessage ) return false
    this.toastr.error("El mensaje debe tener máximo 500 caracteres", "Error en campo MENSAJE")
    return true
  }
} 

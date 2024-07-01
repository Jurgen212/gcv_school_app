import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessageService } from '../../services/error-message.service';
import { ToastrService } from 'ngx-toastr';
import { PqrsfMapperServiceImpl } from 'src/app/infraestructure/helpers/maps/data/MapperPQRSFService';
import { PqrsfEndpointService } from 'src/app/infraestructure/driven-adapter/pqrsf-endpoint/pqrsf-endpoint.service';

@Component({
  selector: 'app-pqrsf',
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css']
})
export class PqrsfComponent {


  constructor(  private fb                : FormBuilder           ,
                private transErr          : ErrorMessageService   ,
                private toastr            : ToastrService         ,
                private _pqrsfMapperServ  : PqrsfMapperServiceImpl,
                private pqrsfServ         : PqrsfEndpointService ){}

  pqrsfForm: FormGroup = this.fb.group({
    'name'    : [ , [ Validators.required, Validators.minLength(5), Validators.maxLength( 50 ), Validators.pattern(/^[a-zA-ZñÑ\s]+$/)] ],
    'num_id'  : [ , [ Validators.required, Validators.pattern( '^[0-9]{6,13}$') ]]                                                    ,
    'phone'   : [ , [ Validators.required, Validators.pattern('^[0-9]{5,15}$') ]]                                                     ,
    'type'    : [ , Validators.required  ]                                                                                            ,
    'mail'    : [ , [ Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ]]                     ,
    'message' : [ , [ Validators.required, Validators.maxLength( 500 ) ] ]
  })  

  sendData(){

   
      this.pqrsfServ.sendPQRSF( this._pqrsfMapperServ.transform( this.pqrsfForm.value ) )?.then((response: any) => {
        this.toastr.success("Gracias por su retroalimentación", "Mensaje enviado con éxito")
          this.pqrsfForm.setValue({
            'name'      : '',
            'num_id'    : '',
            'phone'     : '',
            'type'      : '',
            'mail'      : '',
            'message'   : ''
          })

          console.log("god")
        })
        .catch((error: any ) => {
          this.toastr.error("Por favor reporte este error al teléfono 2374060", "Error interno")
          console.log("Error -> ", error )
        });
  }

  sendForm(){
    if( this.pqrsfForm.invalid ) { 
      this.showError()
      return
    }

    this.sendData()
  }


  
  showError() {

    const invalidValidators: { [key: string]: string[] } =  this.transErr.getInvalidValidators( this.pqrsfForm ) 
  
    // Devuelven false cuando no hay error
    if        ( this.validateRequired ( invalidValidators ) ) return
    else if   ( this.validateName     ( invalidValidators ) ) return
    else if   ( this.validateId       ( invalidValidators ) ) return
    else if   ( this.validatePhone    ( invalidValidators ) ) return
    else if   ( this.validateType     ( invalidValidators ) ) return
    else if   ( this.validateMail     ( invalidValidators ) ) return 
    else if   ( this.validateMessage  ( invalidValidators ) ) return
    return 
  }

  validateId( invalidValidators:{ [key: string]: string[] }): boolean {
    const validateId : boolean = ( invalidValidators["num_id"] === undefined )

    if( validateId ) return false
    this.toastr.error("El número de identificación debe ser válido", "Error en campo IDENTIFICACION")
    return true
  }

  validatePhone( invalidValidators:{ [key: string]: string[] }): boolean {
    const validatePhone : boolean = ( invalidValidators["phone"] === undefined )
    console.log( validatePhone )

    if( validatePhone ) return false
    this.toastr.error("El número de teléfono/celular debe ser válido", "Error en campo TELEFONO")
    return true
  }

  validateType( invalidValidators:{ [key: string]: string[] }): boolean {
    const validateType : boolean = ( invalidValidators["type"] === undefined )

    if( validateType ) return false
    this.toastr.error("Seleccione un tipo de solicitud", "Error en campo SOLICITUD")
    return true
  }


  validateRequired( invalidValidators:{ [key: string]: string[] }): boolean {
    const validationName    : boolean = invalidValidators["name"]     !== undefined && invalidValidators["name"].includes("required")
    const validationMail    : boolean = invalidValidators["mail"]     !== undefined && invalidValidators["mail"].includes("required")
    const validationMessage : boolean = invalidValidators["message"]  !== undefined && invalidValidators["message"].includes("required")
    const validationId      : boolean = invalidValidators["num_id"]   !== undefined && invalidValidators["num_id"].includes("required")
    const validationPhone   : boolean = invalidValidators["phone"]    !== undefined && invalidValidators["phone"].includes("required")
    const validationType    : boolean = invalidValidators["type"]     !== undefined && invalidValidators["type"].includes("required")

    if(  validationName ||  validationMail || validationMessage || validationId || validationPhone || validationType ){

      this.toastr.error("Todos los campos son obligatorios", "Error en formulario")
      return true
    }

    return false
  }

  validateName( invalidValidators:{ [key: string]: string[] }): boolean {
    const validateName : boolean = ( invalidValidators["name"] === undefined )

    if( validateName ) return false
    this.toastr.error("El nombre debe tener entre 5 y 50 letras, sin números ni caracteres especiales", "Error en campo NOMBRE")
    return true
  }

  validateMail( invalidValidators:{ [key: string]: string[] }): boolean {
    const validateMail: boolean = invalidValidators["mail"] === undefined

    if( validateMail ) return false
    this.toastr.error("Ingrese un correo válido", "Error en campo CORREO")
    return true
  }

  validateMessage( invalidValidators:{ [key: string]: string[] }): boolean {

    const validateMessage: boolean = invalidValidators["message"] === undefined

    if( validateMessage ) return false
    this.toastr.error("El mensaje debe tener máximo 500 caracteres", "Error en campo MENSAJE")
    return true
  }
}

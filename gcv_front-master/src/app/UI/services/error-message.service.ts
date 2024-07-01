import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


interface InvalidValidator {
  key: string;
  validators: string[];
}


@Injectable({
  providedIn: 'root'
})


export class ErrorMessageService {

  constructor() { }

  getInvalidValidators(formGroup: FormGroup): { [key: string]: string[] } {
    const invalidValidators: { [key: string]: string[] } = {};
  
    Object.keys(formGroup.controls).forEach(key => {
      const control: AbstractControl | null = formGroup.get(key);
  
      if (control instanceof FormGroup) {
        const nestedInvalidValidators = this.getInvalidValidators(control);
        if (Object.keys(nestedInvalidValidators).length > 0) {
          invalidValidators[key] = Object.keys(nestedInvalidValidators).reduce((acc: string[], nestedKey: string) => {
            return acc.concat(nestedInvalidValidators[nestedKey]);
          }, []);
        }
      } else if (control && control.invalid) {
        const validators: ValidationErrors | null = control.errors;
        if (validators) {
          invalidValidators[key] = Object.keys(validators);
        }
      }
    });
    
    return invalidValidators;
  }

  
}

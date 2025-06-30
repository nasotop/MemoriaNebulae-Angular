import { KeyValuePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [KeyValuePipe],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css'
})
export class FormErrorComponent {
 errors = input.required<ValidationErrors | null | undefined>();
  isTouched = input.required<boolean | undefined>();
  hasError = computed(() => {
    if (
      this.isTouched() != null &&
      this.isTouched() &&
      this.errors() != null &&
      this.errors()
    ) {
      return true;
    }
    return false;
  });


  getErrorMessage(error:string):string{
    const messages:{[key:string]:string}={
      'required': 'Debe ingresar un valor',
      'minlength': 'El valor no cumple con el largo minimo',
      'maxlength': 'El valor no cumple con el largo maximo',
      'email': 'Debe ingresar un correo valido',
      'insecurepassword': 'La contraseña debe tener al menos una mayuscula y un numero',
      'underAge': 'Debe tener mas de 13 años',
      'invalidDate': 'La fecha no es valida'
    }

    return messages[error] || 'Error desconocido';
  }
}

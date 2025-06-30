import { AbstractControl, ValidationErrors } from '@angular/forms';

export function securePasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.value as string;
  const regex = /^(?=.*[A-Z])(?=.*\d).+$/;

  if (!regex.test(password)) {
    return { insecurepassword: true };
  }
  return null;
}

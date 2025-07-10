import { Component, inject } from '@angular/core';
import { LinkComponent } from '../../../../shared/ui/link/link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';
import { Router } from '@angular/router';
import { UserModel } from '../../../../../model/user.model';
/**
 * @Component({
 *   selector: 'app-login-form',
 *   standalone: true,
 *   imports: [LinkComponent, ReactiveFormsModule, FormErrorComponent],
 *   templateUrl: './login-form.component.html',
 *   styleUrls: ['./login-form.component.css']
 * })
 *
 * @class LoginFormComponent
 * @description
 * Muestra un formulario de inicio de sesión con validación.
 * - Campos: email (required, formato email), password (required).
 * - Verifica credenciales contra localStorage.
 * - Redirige al usuario según rol: administrador o usuario normal.
 * - triggerSubmit(): método para disparar submit externamente.
 */

@Component({
  selector: 'app-login-form',
  imports: [LinkComponent, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  private router = inject(Router);

  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    debugger
    if (!this.form.valid) {
      return this.form.markAllAsTouched();
    }

    const email = this.form.get('email')?.value;
    const pass = this.form.get('password')?.value;

    const usuariosJson = localStorage.getItem('users');

    if (!usuariosJson) return;

    const usuariosList = JSON.parse(usuariosJson) as UserModel[];

    const usuarioActual = usuariosList.filter(
      (f) => f.email === email && f.password == pass
    )[0];

    if (!usuarioActual) return;

    localStorage.setItem('actualUser', JSON.stringify(usuarioActual));

    if (usuarioActual.isAdmin) return this.router.navigate(['index-admin']);

    return this.router.navigate(['index']);
  }

  triggerSubmit() {
    this.onSubmit();
  }
}

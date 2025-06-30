import { Component, inject } from '@angular/core';
import { LinkComponent } from '../../../../shared/ui/link/link.component';
import { LinkModel } from '../../../../shared/ui/link/model/link.model';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';
import { securePasswordValidator } from '../../../../../validations/secure-password.validation';
import { passwordMatchValidator } from '../../../../../validations/password-match.validation';
import { UserModel } from '../../../../../model/user.model';

@Component({
  selector: 'app-register-form',
  imports: [LinkComponent, ReactiveFormsModule, FormErrorComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  constructor(private router: Router) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const day = today.getDate().toString().padStart(2, '0');
    this.maxDateString = `${year}-${month}-${day}`;
  }
  maxDateString: string;
  formBuilder = inject(FormBuilder);
  registerForm = this.formBuilder.group(
    {
      names: ['', [Validators.required]],
      lastNames: ['', [Validators.required]],
      username: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          securePasswordValidator,
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: [passwordMatchValidator] }
  );

  registerButtonHandler(payload: { link: LinkModel; event: MouseEvent }) {
    const { link, event } = payload;

    if (link.OnClick) {
      event.preventDefault();
      link.OnClick(event);
    } else {
      this.router.navigate([link.Href]);
    }
  }

  onSubmit() {
    if (!this.registerForm.valid) return this.registerForm.markAllAsTouched();

    const model = this.registerForm.value;

    const usuario = {
      email: model.email!,
      password: model.password!,
      username: model.username!,
      names: model.names!,
      lastNames: model.lastNames!,
      bio: '',
      birthDate: new Date(model.birthDate!),
      isAdmin: false,
      id: 0,
    };

    let usuarios = JSON.parse(localStorage.getItem('users')!) as UserModel[];

    const userId = usuarios ? usuarios[usuarios?.length - 1].id + 1 : 1;

    usuario.id = userId;
    if (usuarios) {
      usuarios.push(usuario);
    } else {
      usuarios = [usuario];
    }

    localStorage.setItem('users', JSON.stringify(usuarios));
    localStorage.setItem('actualUser', JSON.stringify(usuario));

    this.router.navigate(['index']);
  }

  triggerSubmit() {
    this.onSubmit();
  }

  footerLinks = [
    {
      Href: 'auth/login',
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: false,
      Text: 'Volver',
    },
    {
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: false,
      Text: 'Registrarse',
      Id: 'register_submit',
      OnClick: () => this.triggerSubmit(),
    },
  ];
}

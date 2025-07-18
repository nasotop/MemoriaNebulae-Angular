import { Component, inject, input, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { securePasswordValidator } from '../../../../../validations/secure-password.validation';
import { passwordMatchValidator } from '../../../../../validations/password-match.validation';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';
import { UserModel } from '../../../../../model/user.model';

@Component({
  selector: 'app-security',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css',
  standalone: true,
})
export class SecurityComponent {
  userInfo = input.required<UserModel>();

  formBuilder = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit() {
    const u = this.userInfo();
    this.form = this.formBuilder.group(
      {
        profile_mail: [u.email, [Validators.required, Validators.email]],
        profile_confirm_password: [
          { value: u.password, disabled: true },
          [Validators.required, securePasswordValidator],
        ],
        profile_password: [
          { value: u.password, disabled: true },
          [Validators.required],
        ],
        profile_change_password: [false],
      },
      { validators: [passwordMatchValidator] }
    );
  }
  onSubmit() {
    if (!this.form.valid) return this.form.markAllAsTouched();

    var edited = this.form.value;
    this.userInfo().email = edited?.profile_mail;
    if (edited?.profile_change_password) {
      this.userInfo().password = edited?.profile_password;
    }

    localStorage.setItem('actualUser', JSON.stringify(this.userInfo()));

    const raw = localStorage.getItem('users');
    if (!raw) return;

    let users: UserModel[];

    users = JSON.parse(raw) as UserModel[];

    const updated = users.map((u) =>
      u.id === this.userInfo().id ? this.userInfo() : u
    );

    localStorage.setItem('users', JSON.stringify(updated));
  }
  changePassword(event: Event) {
    const element = event.target as HTMLInputElement;
    const isChecked = element.checked;
    if (isChecked) {
      this.form.get('profile_confirm_password')?.enable();
      this.form.get('profile_password')?.enable();
    } else {
      this.form.get('profile_confirm_password')?.disable();
      this.form.get('profile_password')?.disable();
    }
  }
}

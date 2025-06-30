import { Component, inject, input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';
import { UserModel } from '../../../../../model/user.model';

@Component({
  selector: 'app-personal-information',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
  standalone: true,
})
export class PersonalInformationComponent {
  userInfo = input.required<UserModel>();

  formBuilder = inject(FormBuilder);

  form!: FormGroup;

  ngOnInit() {
    const u = this.userInfo();

    // Ahora sí, después de que `userInfo` esté inicializado, construimos el form:
    this.form = this.formBuilder.group({
      profile_name: [u.names, Validators.required],
      profile_last_name: [u.lastNames, Validators.required],
      profile_username: [u.username, Validators.required],
      profile_bio: [u.bio, Validators.required],
    });
  }

  onSubmit() {
    if (!this.form.valid) return this.form.markAllAsTouched();

    var edited = this.form.value;

    this.userInfo().names = edited?.profile_name;
    this.userInfo().lastNames = edited?.profile_last_name;
    this.userInfo().username = edited?.profile_username;
    this.userInfo().bio = edited?.profile_bio;

    localStorage.setItem('actualUser', JSON.stringify(this.userInfo()));

    const raw = localStorage.getItem('users');

    if (!raw) return;

    let users: UserModel[];

    users = JSON.parse(raw) as UserModel[];

    const updated = users.map((u) =>
      u.id === this.userInfo().id ? this.userInfo() : u
    );

    console.log(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  }
}

import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card/card.component';
import { LinkComponent } from '../../../shared/ui/link/link.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LinkModel } from '../../../shared/ui/link/model/link.model';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
import { UserModel } from '../../../../model/user.model';
@Component({
  selector: 'app-login',
  imports: [CardComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent;

  ngOnInit() {
    const usuariosActuales = localStorage.getItem(
      'users'
    ) as unknown as UserModel[];

    if (usuariosActuales != null && usuariosActuales.length != 0) return;

    const usuarios = [
      {
        email: 'user@user.cl',
        password: 'user1',
        username: 'theuser',
        names: 'user',
        lastNames: 'lastnames',
        birthDate: '2000-01-01',
        bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit cras facilisis dis hendrerit, bibendum nisl augue nibh ac venenatis vel nulla euismod. Potenti curae auctor imperdiet purus augue proin cras, euismod sed duis risus ligula felis semper montes',
        isAdmin: false,
        id:1
      },
      {
        email: 'admin@admin.cl',
        password: 'admin1',
        username: 'theadmin',
        names: 'admin',
        lastNames: 'lastnames',
        birthDate: '2000-01-01',
        bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit cras facilisis dis hendrerit, bibendum nisl augue nibh ac venenatis vel nulla euismod. Potenti curae auctor imperdiet purus augue proin cras, euismod sed duis risus ligula felis semper montes',
        isAdmin: true,
        id:2
      },
    ];
    localStorage.setItem('users', JSON.stringify(usuarios));
  }

  loginButtonHandler(payload: { link: LinkModel; event: MouseEvent }) {
    const { link, event } = payload;

    if (link.OnClick) {
      event.preventDefault();
      link.OnClick(event);
    } else {
      this.router.navigate([link.Href]);
    }
  }
  footerLinks = [
    {
      Href: 'auth/register',
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: true,
      Title: 'Crea una cuenta',
      Text: 'Unete a los aventureros',
    },
    {
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: true,
      Title: 'Inicia sesión',
      Text: 'Entra a la mazmorra',
      Id: 'login_submit',
      OnClick: () => this.loginFormComponent.triggerSubmit(),
    },
  ];
}

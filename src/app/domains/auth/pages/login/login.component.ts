import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card/card.component';
import { LinkComponent } from '../../../shared/ui/link/link.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LinkModel } from '../../../shared/ui/link/model/link.model';
import { Router } from '@angular/router';
import { UserModel } from '../../../../model/user.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports: [CardComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private httpClient: HttpClient) {}
  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent;

  ngOnInit() {


    const usuariosActuales = localStorage.getItem(
      'users'
    ) as unknown as UserModel[];

    if (usuariosActuales != null && usuariosActuales.length != 0) return;

    this.httpClient
      .get<UserModel[]>('https://nasotop.github.io/Archivos-JSON/Usuarios.json')
      .subscribe((response) => {
        
        const usuarios = response;
        localStorage.setItem('users', JSON.stringify(usuarios));
      });
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

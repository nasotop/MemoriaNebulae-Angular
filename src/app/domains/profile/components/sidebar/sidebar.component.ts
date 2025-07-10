import { Component } from '@angular/core';
import { UserModel } from '../../../../model/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  onClickVolver() {
    const usuarioActual = localStorage.getItem('actualUser');

    if(!usuarioActual) return;

    const usuario = JSON.parse(usuarioActual) as UserModel;

    if(usuario.isAdmin) {
      window.location.href = '/index-admin';
    }else {
      window.location.href = '/index';
    }

  }

}

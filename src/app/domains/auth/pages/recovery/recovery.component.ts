import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card/card.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { LinkModel } from '../../../shared/ui/link/model/link.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recovery',
  imports: [CardComponent, RecoveryFormComponent],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.css',
})
export class RecoveryComponent {
  constructor(private router: Router) {}

  @ViewChild(RecoveryFormComponent) recoveryFormComponent!: RecoveryFormComponent;

  recoveryButtonHandler(payload: { link: LinkModel; event: MouseEvent }) {
    const { link, event } = payload;

    if (link.OnClick) {
      event.preventDefault();
      link.OnClick(event);
    } else if(link.Href){
      this.router.navigate([link.Href]);
    }
  }
  footerLinks = [
    {
      Href: 'auth/login',
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: false,
      Text: 'Volver',
    },
    {
      // Href: 'auth/login',
      ClassList: ['btn', 'btn-primary'],
      IsTooltip: false,
      Text: 'Recuperar',
      Id: 'recovery_submit',
      OnClick:()=> this.recoveryFormComponent.triggerSubmit()
    },
  ];
}

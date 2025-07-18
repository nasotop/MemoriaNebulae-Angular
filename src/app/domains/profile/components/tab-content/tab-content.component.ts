import { Component, input } from '@angular/core';
import { SecurityComponent } from './security/security.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { UserModel } from '../../../../model/user.model';

@Component({
  selector: 'app-tab-content',
  imports: [SecurityComponent, PersonalInformationComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css',
  standalone:true
})
export class TabContentComponent {
  userInfo = input.required<UserModel>();

}

import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-profile',
  imports: [AvatarComponent, MainContentComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
 
}

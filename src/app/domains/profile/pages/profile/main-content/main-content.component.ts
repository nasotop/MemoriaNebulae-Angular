import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { TabContentComponent } from '../../../components/tab-content/tab-content.component';
import { UserModel } from '../../../../../model/user.model';

@Component({
  selector: 'app-main-content',
  imports: [SidebarComponent, TabContentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  actualUser = signal<UserModel | null>(null);

  constructor() {
    
    const actualUser = JSON.parse(
      localStorage.getItem('actualUser')!
    ) as UserModel;

    this.actualUser.set(actualUser);
  }
}

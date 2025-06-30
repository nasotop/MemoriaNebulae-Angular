import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AdminDashboardComponent } from '../../components/admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, AdminDashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

import { Component } from '@angular/core';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarCollapseComponent } from './navbar-collapse/navbar-collapse.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { NavbarTogglerComponent } from './navbar-toggler/navbar-toggler.component';

@Component({
  selector: 'app-navbar',
  imports: [NavbarBrandComponent, NavbarCollapseComponent, NavbarLinkComponent, NavbarTogglerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

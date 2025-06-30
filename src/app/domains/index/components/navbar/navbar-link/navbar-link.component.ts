import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  template: `
    <li class="nav-item me-3 my-3">
      <a class="btn btn-primary" [href]="href()">
        {{ label() }}
      </a>
    </li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarLinkComponent {
  href = input.required<string>();
  label = input.required<string>();
}

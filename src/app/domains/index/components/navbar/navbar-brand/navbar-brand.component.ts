import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar-brand',
  standalone: true,
  template: `
    <a class="navbar-brand" [href]="href()">
      {{ text() }}
      <img [src]="logoSrc()" [alt]="logoAlt()" height="44" />
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarBrandComponent {
  href = input.required<string>();
  logoSrc = input.required<string>();
  logoAlt = input<string>('Logo');
  text = input.required<string>();
}

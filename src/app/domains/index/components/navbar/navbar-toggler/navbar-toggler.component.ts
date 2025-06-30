import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar-toggler',
  standalone: true,
  template: `
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      [attr.data-bs-target]="'#' + targetId()"
      [attr.aria-controls]="targetId()"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarTogglerComponent {
  targetId = input.required<string>();
}

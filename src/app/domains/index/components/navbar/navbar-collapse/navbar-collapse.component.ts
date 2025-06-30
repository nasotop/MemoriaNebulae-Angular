import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar-collapse',
  standalone: true,
  template: `
    <ul class="navbar-nav">
      <ng-content />
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarCollapseComponent {
}

import { Component, EventEmitter, input, Output } from '@angular/core';
import { LinkModel } from './model/link.model';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  standalone: true,
})
export class LinkComponent {
  model = input.required<LinkModel>();

  @Output() clickEvent = new EventEmitter<{
    link: LinkModel;
    event: MouseEvent;
  }>();

  handleClick(event: MouseEvent) {
    // ahora reemites BOTH link y event
    this.clickEvent.emit({ link: this.model(), event });
  }
}

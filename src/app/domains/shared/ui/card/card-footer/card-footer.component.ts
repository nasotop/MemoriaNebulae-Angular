import { Component, EventEmitter, input, Output } from '@angular/core';
import { LinkComponent } from '../../link/link.component';
import { LinkModel } from '../../link/model/link.model';
@Component({
  selector: 'app-card-footer',
  imports: [LinkComponent],
  templateUrl: './card-footer.component.html',
  styleUrl: './card-footer.component.css',
})
export class CardFooterComponent {
  classList = input<string>('');
  footerLinks = input<LinkModel[]>([]);
  @Output() clickEvent = new EventEmitter<{
    link: LinkModel;
    event: MouseEvent;
  }>();

  buttonHandler(payload: { link: LinkModel; event: MouseEvent }) {
    this.clickEvent.emit(payload);
  }
}

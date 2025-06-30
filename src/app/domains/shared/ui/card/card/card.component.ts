import { Component, EventEmitter, input, Output } from '@angular/core';
import { CardFooterComponent } from '../card-footer/card-footer.component';
import { LinkModel } from '../../link/model/link.model';
@Component({
  selector: 'app-card',
  imports: [CardFooterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  title = input<string | null>();
  footerLinks = input<LinkModel[]>([]);
  @Output() clickEvent = new EventEmitter<{
    link: LinkModel;
    event: MouseEvent;
  }>();

  buttonHandler(payload: { link: LinkModel; event: MouseEvent }) {
    this.clickEvent.emit(payload);
  }
}

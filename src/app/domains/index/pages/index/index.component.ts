import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { StoryContainerComponent } from '../../components/story/story-container/story-container.component';

@Component({
  selector: 'app-index',
  imports: [NavbarComponent, StoryContainerComponent],
  standalone:true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-story-card',
  imports: [],
  templateUrl: './story-card.component.html',
  styleUrl: './story-card.component.css',
})
export class StoryCardComponent {
  title = input.required<string>();
  content = input.required<string>();
  moodIcon = input<number>(0);

  getIcon(mood: number): string {
    const sources: { [key: number]: string } = {
      5: '/assets/icons/rayo-de-risa.svg',
      4:'/assets/icons/sonrisa-alternativa.svg',
      3:'/assets/icons/meh.svg',
      2:'/assets/icons/cara-decepcionada.svg',
      1:'/assets/icons/cansado.svg',
      0:'/assets/icons/llanto-triste.svg'

    };
    return sources[mood] || '';
  }
}

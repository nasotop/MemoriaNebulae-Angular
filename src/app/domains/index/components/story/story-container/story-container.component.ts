import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  signal,
} from '@angular/core';
import { StoryCardComponent } from '../story-card/story-card.component';
import { StoryFormComponent } from '../story-form/story-form.component';
import { StoryPostModel } from '../../../../../model/story-post.model';
import { UserModel } from '../../../../../model/user.model';

@Component({
  selector: 'app-story-container',
  imports: [StoryCardComponent, StoryFormComponent],
  templateUrl: './story-container.component.html',
  styleUrl: './story-container.component.css',
})
export class StoryContainerComponent {
  stories = signal<StoryPostModel[]>([]);
  userId = signal<Number>(0);
  injector = inject(Injector);

  ngOnInit() {
   
    const usuario = JSON.parse(localStorage.getItem('actualUser')!) as UserModel;

    if (usuario !== null) {
      this.userId.set(usuario.id);
    }

    const storage = localStorage.getItem('stories');
    if (storage !== null) {
      const stories = JSON.parse(storage);
      this.stories.set(stories);
    }
    this.storiesTracker();
  }
  postHandler(post: StoryPostModel) {
    
    post.userId = this.userId() as number;
    this.stories.update((stories) => [...stories, post]);

    localStorage.setItem('stories', JSON.stringify(this.stories()));
  }

  storiesTracker() {
    effect(
      () => {
        const stories = this.stories();
        const elements = JSON.stringify(stories);
        localStorage.setItem('stories', elements);
      },
      { injector: this.injector }
    );
  }

  usersPost = computed(() => {

    const id = this.userId();

    return this.stories().filter((f) => f.userId === id);
  });
}

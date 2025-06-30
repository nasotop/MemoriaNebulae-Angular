import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';
import { StoryPostModel } from '../../../../../model/story-post.model';

/**
 * @Component({
 *   selector: 'app-story-form',
 *   standalone: true,
 *   imports: [ReactiveFormsModule, FormErrorComponent],
 *   templateUrl: './story-form.component.html',
 *   styleUrls: ['./story-form.component.css']
 * })
 *
 * @class StoryFormComponent
 * @description
 * Componente de formulario de historia que emite un evento con los datos ingresados al hacer submit.
 * - Campos: title (required), content (required), mood (range signal inicial 5).
 * - Emite 'submitted' con modelo StoryPostModel.
 * - Resetea el formulario y el estado de ánimo tras el envío.
 * - Maneja el cambio del mood mediante onMoodChange().
 */

@Component({
  selector: 'app-story-form',
  imports: [ReactiveFormsModule, FormErrorComponent],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.css',
})
export class StoryFormComponent {
  @Output() submitted = new EventEmitter<StoryPostModel>();
  mood = signal(5);

  
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    mood: [this.mood()],
  });

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value as StoryPostModel);
      this.mood.set(5);
      this.form.reset({ title: '', content: '', mood: this.mood() });
    }else{
      this.form.markAllAsTouched()
    }
  }

  onMoodChange(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value, 10);
    this.mood.set(value);
  }
}

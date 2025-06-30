import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorComponent } from '../../../../shared/ui/form/form-error/form-error.component';

@Component({
  selector: 'app-recovery-form',
  imports: [FormErrorComponent, ReactiveFormsModule],
  templateUrl: './recovery-form.component.html',
  styleUrl: './recovery-form.component.css'
})
export class RecoveryFormComponent {
  private router = inject(Router);

  formBuilder = inject(FormBuilder);

  formGroupRecovery = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
  })
  onSubmit() {
    if (this.formGroupRecovery.valid) {
      this.isSubmit.set(true);
      // this.router.navigate(["index"]);
    } else {
      this.isSubmit.set(false);
      
      this.formGroupRecovery.markAllAsTouched();
    }
  }

  triggerSubmit() {
    this.onSubmit();
  }

  isSubmit = signal<boolean>(false);

  alertState =  computed(()=> {

    return  this.isSubmit();

  });
}

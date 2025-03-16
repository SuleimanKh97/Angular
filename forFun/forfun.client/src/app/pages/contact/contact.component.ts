import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  contactInfo = {
    address: 'طريق الملك عبدالله، الرياض، المملكة العربية السعودية',
    email: 'info@halalmarket.com',
    phone: '+966 12 345 6789',
    workHours: 'من الأحد إلى الخميس: 9 صباحًا - 5 مساءً'
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9]{9,15}$/)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      // In a real application, you would call an API service here
      // For now, we'll just simulate a successful submission
      setTimeout(() => {
        console.log('Form submitted', this.contactForm.value);
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
      }, 1500);
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}

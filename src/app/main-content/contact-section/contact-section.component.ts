import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    acceptedPolicy: false,
  };

  messageSend = false;
  errorMessage = false;
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.messageSend = true;
      this.errorMessage = false;
      ngForm.resetForm();

      setTimeout(() => {
        this.messageSend = false;
      }, 4000);
    } else {
      this.messageSend = false;
      this.errorMessage = true;

      setTimeout(() => {
        this.errorMessage = false;
      }, 4000);
    }
  }
}

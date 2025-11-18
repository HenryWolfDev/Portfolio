import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [CommonModule, FormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent implements OnInit {
  private readonly storageKey = 'contactFormData';
  contactData = this.getEmptyContactData();

  messageSend = false;
  errorMessage = false;

  ngOnInit(): void {
    this.restoreFormState();
  }

  handleFormChange(): void {
    const storage = this.getStorage();
    if (!storage) return;
    storage.setItem(this.storageKey, JSON.stringify(this.contactData));
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.messageSend = true;
      this.errorMessage = false;
      this.resetForm(ngForm);

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

  private resetForm(ngForm: NgForm): void {
    const emptyData = this.getEmptyContactData();
    ngForm.resetForm(emptyData);
    this.contactData = emptyData;
    this.removeStoredFormState();
  }

  private restoreFormState(): void {
    const storage = this.getStorage();
    if (!storage) return;
    const savedData = storage.getItem(this.storageKey);
    if (!savedData) return;
    try {
      const parsed = JSON.parse(savedData);
      this.contactData = { ...this.getEmptyContactData(), ...parsed };
    } catch {
      this.removeStoredFormState();
    }
  }

  private removeStoredFormState(): void {
    const storage = this.getStorage();
    storage?.removeItem(this.storageKey);
  }

  private getStorage(): Storage | null {
    return typeof window !== 'undefined' ? window.sessionStorage : null;
  }

  private getEmptyContactData() {
    return {
      name: '',
      email: '',
      message: '',
      acceptedPolicy: false,
    };
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
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

  // WICHTIG:
  // - Für Produktion: funktioniert, wenn Angular-Build UND sendMail.php auf derselben Domain liegen.
  // - Für Dev (localhost:4200) brauchst du meist eine absolute URL, z.B.:
  //   private readonly mailEndpoint = 'http://localhost/sendMail.php';
  private readonly mailEndpoint = 'https://henrywolf.de/sendMail.php';

  contactData = this.getEmptyContactData();

  http = inject(HttpClient);

  messageSend = false;
  errorMessage = false;
  isSubmitting = false;

  ngOnInit(): void {
    this.restoreFormState();
  }

  handleFormChange(): void {
    const storage = this.getStorage();
    if (!storage) return;
    storage.setItem(this.storageKey, JSON.stringify(this.contactData));
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.invalid) {
      this.showErrorMessage();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = false;

    this.http
      .post(
        this.mailEndpoint,
        {
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
        },
        {
          // 👇 Anpassung: deine sendMail.php liefert keinen JSON-Body,
          // also sagen wir Angular: erwarte nur Text (auch leerer String ist ok).
          responseType: 'text' as const,
        }
      )
      .subscribe({
        next: () => {
          this.messageSend = true;
          this.isSubmitting = false;
          this.resetForm(ngForm);
          this.hideStatusAfterDelay();
        },
        error: () => {
          this.isSubmitting = false;
          this.showErrorMessage();
        },
      });
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

  private hideStatusAfterDelay(): void {
    setTimeout(() => {
      this.messageSend = false;
      this.errorMessage = false;
    }, 4000);
  }

  private showErrorMessage(): void {
    this.messageSend = false;
    this.errorMessage = true;
    this.hideStatusAfterDelay();
  }
}

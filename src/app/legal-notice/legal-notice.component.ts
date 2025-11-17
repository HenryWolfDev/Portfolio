import { Component } from '@angular/core';
import { FooterComponent } from '../shared-components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  imports: [FooterComponent, CommonModule, TranslatePipe, RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, RouterLink, FooterComponent, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {}

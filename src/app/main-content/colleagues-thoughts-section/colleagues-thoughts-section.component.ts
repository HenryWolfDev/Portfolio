import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColleagueCardComponent } from './colleague-card/colleague-card.component';
import { COLLEAGUE_MATES } from './colleague.data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-colleagues-thoughts-section',
  imports: [CommonModule, ColleagueCardComponent, TranslatePipe],
  templateUrl: './colleagues-thoughts-section.component.html',
  styleUrl: './colleagues-thoughts-section.component.scss',
})
export class ColleaguesThoughtsSectionComponent {
  colleagues = COLLEAGUE_MATES;
}

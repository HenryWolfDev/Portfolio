import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ColleagueCardComponent } from './colleague-card/colleague-card.component';
import { COLLEAGUE_MATES } from './colleague.data';

@Component({
  selector: 'app-colleagues-thoughts-section',
  imports: [CommonModule, ColleagueCardComponent],
  templateUrl: './colleagues-thoughts-section.component.html',
  styleUrl: './colleagues-thoughts-section.component.scss',
})
export class ColleaguesThoughtsSectionComponent {
  colleagues = COLLEAGUE_MATES;
}

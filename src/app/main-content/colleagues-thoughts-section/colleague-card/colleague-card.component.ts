import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

export interface ColleagueCard {
  slug: string;
  text: string;
  name: string;
  title: string;
  href: string;
}

@Component({
  selector: 'app-colleague-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './colleague-card.component.html',
  styleUrl: './colleague-card.component.scss',
})
export class ColleagueCardComponent {
  @Input({ required: true }) colleagueCard!: ColleagueCard;
}

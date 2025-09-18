import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

export interface Project {
  slug: string;
  title: string;
  gitHub_Link: string;
  details: string;
  teaser_text: string;
  image: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  template: `
    <div class="card">
      <div class="image-box">
        <img [src]="project().image" [alt]="project().title" loading="lazy" />
        <button
          class="project-details"
          [routerLink]="['/projects', project().slug]"
        >
          Project details
        </button>
      </div>
      <h3 class="card_title">{{ project().title | translate }}</h3>
      <p class="teaser_text">{{ project().teaser_text | translate }}</p>
    </div>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  // @Input() project!: Project;
  project = input.required<Project>();
}

import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

export interface Project {
  slug: string;
  title: string;
  teaser_text: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  template: `
    <!-- <div class="card" [routerLink]="['/projects', project.slug]">
      <div class="image-box">
        <img [src]="project.image" [alt]="project.title" loading="lazy" />
        <button class="project-details">Project details</button>
      </div>
      <h3 class="card_title">{{ project.title | translate }}</h3>
      <p class="teaser_text">{{ project.teaser_text | translate }}</p>
    </div> -->

    <div class="card">
      <div class="image-box">
        <img [src]="project.image" [alt]="project.title" loading="lazy" />
        <button
          class="project-details"
          [routerLink]="['/projects', project.slug]"
          (click)="$event.stopPropagation()"
        >
          Project details
        </button>
      </div>
      <h3 class="card_title">{{ project.title | translate }}</h3>
      <p class="teaser_text">{{ project.teaser_text | translate }}</p>
    </div>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}

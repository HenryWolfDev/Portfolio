import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Project {
  slug: string;
  title: string;
  teaser: string;
  image: string;
  featured?: boolean;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a class="card" [routerLink]="['/projects', project.slug]">
      <div class="media">
        <img [src]="project.image" [alt]="project.title" loading="lazy" />
        <span *ngIf="project.featured" class="badge">Featured</span>
      </div>
      <h3>{{ project.title }}</h3>
      <p class="teaser">{{ project.teaser }}</p>
    </a>
  `,
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}

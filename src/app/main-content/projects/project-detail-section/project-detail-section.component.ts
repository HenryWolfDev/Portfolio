import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: ` <ng-container *ngIf="project; else notFound">
      <section class="project-detail container">
        <h1>{{ project.title | translate }}</h1>
        <img [src]="project.image" [alt]="project.title" />
        <p>{{ project.teaser_text | translate }}</p>
        <!-- hier kannst du weitere Detailinfos rendern -->
      </section>
    </ng-container>
    <ng-template #notFound>
      <p>Project not found.</p>
    </ng-template>`,
  styleUrl: './project-detail-section.component.scss',
})
export class ProjectDetailSectionComponent {
  private route = inject(ActivatedRoute);
  project = (() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PROJECTS.find((p) => p.slug === slug);
  })();
}

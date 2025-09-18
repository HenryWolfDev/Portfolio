import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project } from '../../shared-interfaces/project';

@Component({
  selector: 'app-project-detail-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './project-detail-section.component.html',
  styleUrl: './project-detail-section.component.scss',
})
export class ProjectDetailSectionComponent {
  private route = inject(ActivatedRoute);

  slug = toSignal(this.route.params, { initialValue: { slug: '' } });

  get project(): Project {
    const { slug } = this.slug();
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    return PROJECTS[index];
  }

  get nextSlug() {
    const { slug } = this.slug();
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    return PROJECTS[(index + 1) % PROJECTS.length].slug;
  }

  // opens link in new tab
  openBtnLink(url: string) {
    window.open(url, '_blank');
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project, TechIcon } from '../../shared-interfaces/project';
import { TECH_ICON_MAP } from './config/tech-icons.config';

@Component({
  selector: 'app-project-detail-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './project-detail-section.component.html',
  styleUrl: './project-detail-section.component.scss',
})
export class ProjectDetailSectionComponent {
  private route = inject(ActivatedRoute);

  readonly TECH_ICON_MAP = TECH_ICON_MAP;

  slug = toSignal(this.route.params, { initialValue: { slug: '' } });

  get project(): Project | undefined {
    const { slug } = this.slug();
    return PROJECTS.find((p) => p.slug === slug);
  }

  get nextSlug() {
    const { slug } = this.slug();
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    return PROJECTS[(index + 1) % PROJECTS.length].slug;
  }

  get techIcons(): TechIcon[] {
    const project = this.project;
    if (!project) return [];

    return project.techStack
      .map((key) => this.TECH_ICON_MAP[key.toLowerCase()])
      .filter((icon): icon is TechIcon => !!icon);
  }

  // opens link in new tab
  openBtnLink(url: string) {
    window.open(url, '_blank');
  }
}

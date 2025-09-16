import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-detail-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './project-detail-section.component.html',
  styleUrl: './project-detail-section.component.scss',
})
export class ProjectDetailSectionComponent {
  private route = inject(ActivatedRoute);
  project = (() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PROJECTS.find((p) => p.slug === slug);
  })();

  openBtnLink(url: string) {
    window.open(url, 'blank');
  }
}

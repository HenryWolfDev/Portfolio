import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './project-detail-section.component.html',
  styleUrl: './project-detail-section.component.scss',
})
export class ProjectDetailSectionComponent {
  // constructor(private location: Location) {}
  // goBack() {
  //   this.location.back();
  // }
  private route = inject(ActivatedRoute);
  project = (() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PROJECTS.find((p) => p.slug === slug);
  })();

  openBtnLink(url: string) {
    window.open(url, 'blank');
  }
}

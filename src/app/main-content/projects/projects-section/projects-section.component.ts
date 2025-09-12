import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from '../projects.data';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgFor, ProjectCardComponent, TranslatePipe],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  projects = PROJECTS;
}

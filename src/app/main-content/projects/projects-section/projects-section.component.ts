import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { PROJECTS } from '../projects.data';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [NgFor, ProjectCardComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  projects = PROJECTS;
}

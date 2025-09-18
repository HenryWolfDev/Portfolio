import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../shared-interfaces/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  project = input.required<Project>();
}

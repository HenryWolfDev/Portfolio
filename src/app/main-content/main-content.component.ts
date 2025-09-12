import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSetSectionComponent } from './skill-set-section/skill-set-section.component';
import { HeaderComponent } from '../shared-components/header/header.component';
import { ProjectsSectionComponent } from './projects/projects-section/projects-section.component';

@Component({
  selector: 'app-main-content',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillSetSectionComponent,
    ProjectsSectionComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {}

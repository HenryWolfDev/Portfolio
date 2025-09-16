import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillSetSectionComponent } from './skill-set-section/skill-set-section.component';
import { ProjectsSectionComponent } from './projects/projects-section/projects-section.component';
import { ColleaguesThoughtsSectionComponent } from './colleagues-thoughts-section/colleagues-thoughts-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillSetSectionComponent,
    ProjectsSectionComponent,
    ColleaguesThoughtsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {}

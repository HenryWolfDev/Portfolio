import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set-section',
  imports: [],
  templateUrl: './skill-set-section.component.html',
  styleUrl: './skill-set-section.component.scss',
})
export class SkillSetSectionComponent {
  peelOffVisible = false;
  hideFirtLayer = false;

  togglePeelBox() {
    this.peelOffVisible = !this.peelOffVisible;
    this.hideFirtLayer = !this.hideFirtLayer;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  buttonText = 'Hello world';

  onHover() {
    this.buttonText = 'I´m Henry Wolf';
  }

  onLeave() {
    this.buttonText = 'Hello world';
  }
}

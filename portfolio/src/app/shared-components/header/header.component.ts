import { Component, signal, inject } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // private translate = inject(TranslateService);
  // useLanguage(language: string): void {
  //   this.translate.use(language);
  // }

  isHovering = signal(false);
  hasHovered = signal(false);

  onMouseEnter() {
    this.hasHovered.set(true);
    this.isHovering.set(true);
  }

  onMouseLeave() {
    this.isHovering.set(false);
  }

  onAnimationEnd(e: AnimationEvent) {
    const name = e.animationName;
    // Nur wenn die Rückwärtsanimation fertig ist => Reset
    if (
      name === 'draw-line-reverse' ||
      (e.target as HTMLElement).classList.contains('draw-reverse')
    ) {
      this.hasHovered.set(false); // entfernt draw-reverse via Binding
    }
  }
}

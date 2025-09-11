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

  // checking id before starting methods for the HTML Element
  // #region
  private hoverID: string | null = null;
  private hovered: string | null = null;

  isHovering(id: string) {
    return this.hoverID === id;
  }

  hasHovered(id: string) {
    return this.hovered === id;
  }

  mouseEntered(id: string) {
    this.hoverID = id;
    this.hovered = id;
  }

  mouseLeaved(id: string) {
    if (this.hoverID === id) this.hoverID = null;
  }

  // looking for animation end here
  onAnimationEnd(e: AnimationEvent, id: string) {
    const name = e.animationName;
    if (!this.isHovering(id) && name === 'draw-line-reverse') {
      this.hovered = null;
    }
  }
  // #endregion
}

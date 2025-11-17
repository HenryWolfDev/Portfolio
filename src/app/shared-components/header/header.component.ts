import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  // checking language switch
  currentLang = this.translate.currentLang || 'en';
  isMenuOpen = false;

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    const body = this.document?.body;
    if (!body) return;

    if (this.isMenuOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  ngOnDestroy(): void {
    this.isMenuOpen = false;
    this.updateBodyScroll();
  }

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

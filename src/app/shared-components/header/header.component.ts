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
  private readonly menuAnimationDuration = 450;
  private menuCloseTimeout: ReturnType<typeof setTimeout> | null = null;

  // checking language switch
  currentLang = this.translate.currentLang || 'en';
  isMenuOpen = false;
  isClosing = false;
  menuVisible = false;

  useLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language;
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  private openMenu(): void {
    if (this.menuCloseTimeout) {
      clearTimeout(this.menuCloseTimeout);
      this.menuCloseTimeout = null;
    }

    this.isClosing = false;

    if (!this.menuVisible) {
      this.menuVisible = true;
    }

    this.lockBodyScroll(true);

    if (typeof window !== 'undefined' && window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        this.isMenuOpen = true;
      });
    } else {
      this.isMenuOpen = true;
    }
  }

  closeMenu(): void {
    if (!this.menuVisible && !this.isMenuOpen) {
      return;
    }

    this.isClosing = true;
    this.isMenuOpen = false;

    if (this.menuCloseTimeout) {
      clearTimeout(this.menuCloseTimeout);
    }

    this.menuCloseTimeout = setTimeout(() => {
      this.menuVisible = false;
      this.isClosing = false;
      this.lockBodyScroll(false);
      this.menuCloseTimeout = null;
    }, this.menuAnimationDuration);
  }

  private lockBodyScroll(shouldLock: boolean): void {
    const body = this.document?.body;
    if (!body) return;

    if (shouldLock) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  ngOnDestroy(): void {
    this.isMenuOpen = false;
    this.isClosing = false;
    this.menuVisible = false;
    if (this.menuCloseTimeout) {
      clearTimeout(this.menuCloseTimeout);
      this.menuCloseTimeout = null;
    }
    this.lockBodyScroll(false);
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
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

import { Component, OnInit } from '@angular/core';
import { Nav, navData } from '../../interfaces/nav';
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ViewportScroller,
} from '@angular/common';

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, NgClass],
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  navigations: Nav[] = [];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private scroller: ViewportScroller
  ) {
    this.navigations = navData;
  }

  activeId: string = '';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, true);
      window.addEventListener('hashchange', this.onScroll, true);

      setTimeout(() => {
        this.onScroll();
      }, 1);
    }
  }

  scrollTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  onScroll = () => {
    const sectionIds = this.navigations.map((n) => n.id);
    let closestSection: string | null = null;
    let closestOffset = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const offset = Math.abs(rect.top);

        // Section is in view (optional: tune 200 for scroll offset threshold)
        if (rect.top <= 200 && offset < closestOffset) {
          closestOffset = offset;
          closestSection = id;
        }
      }
    }

    if (closestSection) {
      this.activeId = `#${closestSection}`;
    } else {
      const hash = location.hash || '#about';
      this.activeId = hash;
    }
  };
}

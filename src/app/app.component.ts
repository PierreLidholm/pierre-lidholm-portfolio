import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ExperienceSectionComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'pierre-lidholm-portfolio';


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const glow = document.getElementById('cursorGlow') as HTMLElement | null;
      if (!glow) return;
  
      let latestX = 0;
      let latestY = 0;
      let isAnimating = false;
  
      const updateGlow = () => {
        glow.style.left = `${latestX}px`;
        glow.style.top = `${latestY}px`;
        isAnimating = false;
      };
  
      document.addEventListener('mousemove', (e: MouseEvent) => {
        latestX = e.clientX;
        latestY = e.clientY;
  
        if (!isAnimating) {
          requestAnimationFrame(updateGlow);
          isAnimating = true;
        }
      });
    }
  }

}

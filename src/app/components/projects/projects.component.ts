import { Component } from '@angular/core';
import { Project, projectsData } from '../../interfaces/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [];

  hoveredExp: number | null = null;

  constructor() {
    this.projects = projectsData;
  }
}

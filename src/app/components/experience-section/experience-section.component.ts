import { Component } from '@angular/core';
import { Experience, experiencesData } from '../../interfaces/experience';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  experiences: Experience[] = [];

  hoveredExp: number | null = null;

  constructor() {
    this.experiences = experiencesData;
  }
}

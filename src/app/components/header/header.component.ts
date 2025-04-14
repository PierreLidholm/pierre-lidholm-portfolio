import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',

  imports: [
    SocialMediaComponent,
    NavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

import { Component } from '@angular/core';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private analyticsService: AnalyticsService) {
  }

  trackStreamClick() {
    this.analyticsService.trackEvent('Stream Link Clicked', 'Stream Link Clicked', 'LINKS')
  }

  trackDiscordClick() {
    this.analyticsService.trackEvent('Discord Link Clicked', 'Discord Link Clicked', 'LINKS')
  }

}

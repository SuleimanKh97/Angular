import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  // Current year for copyright notice
  currentYear = new Date().getFullYear();

  // Last updated date
  lastUpdated = 'فبراير 15, 2025';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  // Current year for copyright notice
  currentYear = new Date().getFullYear();

  // Last updated date
  lastUpdated = 'فبراير 15, 2025';
}

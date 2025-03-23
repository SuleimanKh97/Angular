import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.getElementById('offer')!.style.color = 'red';
    }, 1000);
  }
}

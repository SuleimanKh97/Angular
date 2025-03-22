import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  currentItem = 'Television';

  userInfo: { name: string, email: string, age: number } = {
    name: "Salma",
    email: "Salma@gmail.com",
    age: 23
  };

  items = ['item1', 'item2', 'item3', 'item4'];

  adddata(udata: any) {
    
    this.userInfo.name = udata.name
    this.userInfo.email = udata.email
    this.userInfo.age = udata.age


  }
  isShown: boolean = false; // hidden by default


  toggleShow() {

    this.isShown = !this.isShown;

  }
}

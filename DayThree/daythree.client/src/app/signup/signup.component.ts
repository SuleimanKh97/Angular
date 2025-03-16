import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private puser: AuthService , private _route: Router) { }
  ngOnInit() { }

  signup(data: any) {
    this.puser.postuser(data).subscribe(() => {
      alert("New User Added");
      this._route.navigate(['/login'])
    })
  }

}

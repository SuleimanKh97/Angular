import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private guser: AuthService, private _active: ActivatedRoute, private _route: Router) { }

  ngOnInit() { }
  userdata: any
  login(datauser: any) {
    this.guser.getuser().subscribe((data) => {
      this.userdata = data
      let user = this.userdata.find((p: any) => p.Email == datauser.Email && p.password == datauser.password);
      if (user) {
        alert("login successfully")
        this._route.navigate([""])
      }
      else {
        alert("Invalide email or password ")
      }

    })




  }
}

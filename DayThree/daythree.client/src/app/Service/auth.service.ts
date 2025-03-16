import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  postuser(data: any) {
    return this.http.post('https://67cea6ee125cd5af757b6514.mockapi.io/Users', data)
  }

  getuser() {
    return this.http.get('https://67cea6ee125cd5af757b6514.mockapi.io/Users')
  }
}

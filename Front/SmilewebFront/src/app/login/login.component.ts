import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = {
    email : '',
    password : ''
  
  }

  constructor( private _auth : AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){

    this._auth.loginUser(this.loginData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
      },
      err => console.log(err)
    )
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";
import {AppoinmentsComponent} from '../appoinments/appoinments.component';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  regData = {
    fname : '',
    lname : '',
    city : '',
    age : '',
    email : '',
    password : ''
  }
  //private _router: any;
  constructor( private _auth : AuthService , private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser (){

    this._auth.registerUser(this.regData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/appoinments-component'])
      },
      err => console.log(err)
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../doctor.service';
import {Doctor} from '../models/doctor'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

doctors: Doctor[] ;
  constructor( private docservice : DoctorService ) { }

  

  ngOnInit(): void {

    this.docservice.getDoctor()
    .subscribe((data:any) =>{
      console.log(data);
      this.doctors = data;
      console.log(this.doctors);
    })

  }
}

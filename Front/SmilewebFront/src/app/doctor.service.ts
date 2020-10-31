import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private _doctorUrl = 'http://localhost:3000/api/doctor'
  constructor( private http : HttpClient ) { }

  getDoctor(){
    return this.http.get<any>(this._doctorUrl)
}

  docDetails(){
    
  }

}

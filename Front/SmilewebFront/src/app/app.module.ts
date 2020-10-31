import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './auth.service';
import {DoctorService} from './doctor.service';
import { LoginComponent } from './login/login.component';
import {EventsService} from './events.service';
import {UserguardGuard} from './userguard.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { DocDetailsComponent } from './doc-details/doc-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AppoinmentsComponent,
    HomeComponent,
    AuthComponent,
    LoginComponent,
    DocDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [AuthService, EventsService, DoctorService, UserguardGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

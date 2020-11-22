import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginEmailComponent } from './components/login-email/login-email.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

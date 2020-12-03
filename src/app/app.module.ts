import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { HomePageComponent} from "./components/home-page/home-page.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginEmailComponent } from './components/login-email/login-email.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChampionshipPageComponent } from './components/championship-page/championship-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    HomePageComponent,
    AboutUsPageComponent,
    SignupComponent,
    LoginEmailComponent,
    LoginComponent,
    ChampionshipPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

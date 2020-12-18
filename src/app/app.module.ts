import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import { SocialLoginModule, SocialAuthServiceConfig} from "angularx-social-login";


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
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    HomePageComponent,
    AboutUsPageComponent,
    SignupComponent,
    LoginEmailComponent,
    LoginComponent,
    ChampionshipPageComponent,
    UserProfileComponent
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
    FontAwesomeModule,
    SocialLoginModule,
  ],
  providers:  [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '505489297445-6gkt7qks96mcfts8as5ppflqe2otsk9a.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

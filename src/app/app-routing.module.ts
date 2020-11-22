import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginEmailComponent} from './components/login-email/login-email.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  { path: 'login',       component: LoginComponent },
  { path: 'login-email', component: LoginEmailComponent },
  { path: 'signup',      component: SignupComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

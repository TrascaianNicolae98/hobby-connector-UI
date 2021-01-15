import { NgModule } from '@angular/core';
import {FacilitiesComponent} from "./components/facilities/facilities.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule, Routes} from '@angular/router';
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginEmailComponent} from "./components/login-email/login-email.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ChampionshipPageComponent} from "./components/championship-page/championship-page.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {TournamentPageComponent} from './components/tournament-page/tournament-page.component';
import {AuthGuard} from './helper/Authguard';
import {ChampionshipTournamentPageComponent} from "./components/championship-tournament-page/championship-tournament-page.component";


const routes: Routes = [
  {path: 'homePage', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'aboutUsPage', component: AboutUsPageComponent},
  {path: 'facilitiesPage', component: FacilitiesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: LoginEmailComponent },
  { path: 'signup', component: SignupComponent },
  {path: '', redirectTo: '/aboutUsPage', pathMatch: 'full' },
  {path: 'championshipPage', component: ChampionshipPageComponent, canActivate: [AuthGuard]},
  {path: 'tournamentPage', component: TournamentPageComponent, canActivate: [AuthGuard]},
  {path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'championshipTournament', component: ChampionshipTournamentPageComponent}

];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

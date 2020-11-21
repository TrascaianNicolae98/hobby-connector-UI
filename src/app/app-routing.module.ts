import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacilitiesComponent} from "./components/facilities/facilities.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: 'homePage', component: HomePageComponent},
  {path: 'facilitiesPage', component: FacilitiesComponent},
  {path: '', redirectTo: '/homePage', pathMatch: 'full' }

];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

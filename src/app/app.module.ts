import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent, InAppRootOverlayContainer} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import { HomePageComponent } from './components/home-page/home-page.component';
import {OverlayContainer} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [{ provide: OverlayContainer, useClass: InAppRootOverlayContainer }],
  bootstrap: [AppComponent]
})
export class AppModule { }

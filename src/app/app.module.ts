import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatCardTitle} from "@angular/material/card";
import { MatCardHeader} from "@angular/material/card";
import { MatCard} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

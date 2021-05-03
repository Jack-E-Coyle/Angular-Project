import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ApiComponent } from './api/api.component';
import { DisplayComponent } from './display/display.component';
import { RecentApiComponent } from './recent-api/recent-api.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApiComponent,
    DisplayComponent,
    RecentApiComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

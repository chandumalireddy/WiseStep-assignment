import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgTinyUrlModule } from 'ng-tiny-url';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';
import { HttpClientModule } from '@angular/common/http';
import { GetshortenUrlComponent } from './getshorten-url/getshorten-url.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenUrlComponent,
    GetshortenUrlComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

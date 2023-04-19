import { PaisComponent } from './pais/pages/pais/pais.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    PaisModule,
    HttpClientModule,
    FormsModule,
    CommonModule
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


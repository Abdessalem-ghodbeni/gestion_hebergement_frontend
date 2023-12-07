import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/Layouts/home/home.component';
import { Error404Component } from './home/views/error404/error404.component';
import { SigninComponent } from './home/views/signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './home/views/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './modules/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

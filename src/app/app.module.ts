import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LengthPipe } from './Pipes/length.pipe';
import { AnkaraComponent } from './components/cities/ankara/ankara.component';
import { IstanbulComponent } from './components/cities/istanbul/istanbul.component';
import { EdirneComponent } from './components/cities/Edirne/Edirne.component';
import { IzmirComponent } from './components/cities/izmir/izmir.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SummaryComponent,
        LengthPipe,
        AnkaraComponent,
        IstanbulComponent,
        EdirneComponent,
        IzmirComponent,         
        FooterComponent,
        LoginComponent,
        SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
        
    ]
})
export class AppModule { }

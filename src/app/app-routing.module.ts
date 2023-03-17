import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnkaraComponent } from './components/cities/ankara/ankara.component';
import { SummaryComponent } from './components/summary/summary.component';
import { IstanbulComponent } from './components/cities/istanbul/istanbul.component';
import { IzmirComponent } from './components/cities/izmir/izmir.component';
import { EdirneComponent } from './components/cities/Edirne/Edirne.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';



const routes: Routes = [
   {path:"",redirectTo:"home",pathMatch:'full'},
   {path:"home",component:SummaryComponent},
   {path:"summaries/Ankara",component:AnkaraComponent},
   {path:"summaries/İstanbul", component:IstanbulComponent},
   {path:"summaries/Edirne", component:EdirneComponent},
   {path:"summaries/İzmir",component:IzmirComponent},
   {path:"login",component:LoginComponent},
   {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

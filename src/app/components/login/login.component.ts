import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup

  constructor(private fb:FormBuilder, private http:HttpClient,
    private router:Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
       Email:["",Validators.required],
      Password:["",Validators.required]
    })

  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
      });
      if(user){
        alert("Giriş Başarılı");
        this.loginForm.reset();
        this.router.navigate(["app-summary"])
      }else{
        alert("böyle biri yok");
      }
    },err=>{
      alert("bir sorun var")
    })
  }
}

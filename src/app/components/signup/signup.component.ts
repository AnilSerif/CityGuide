import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,
    private router:Router) { }

  type:string="password";
  isText:boolean =false;
  signUpForm!:FormGroup;
  
  ngOnInit() {
    this.signUpForm = this.fb.group({
      FirstName:["",Validators.required],
      LastName:["",Validators.required],
      UserName:["",Validators.required],
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }

  Signup(){
    this.http.post<any>("http://localhost:3000/signupUsers",this.signUpForm.value)
    .subscribe(res=>{
      alert("Kayıt Başarılı");
      this.signUpForm.reset();
      this.router.navigate(["login"]);
    },err=>{
      alert("bir şey yanlış gitti")
    })
    

  }

}

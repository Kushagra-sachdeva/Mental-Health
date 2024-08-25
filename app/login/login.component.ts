import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { login } from '../Services/login';
import { LoginService } from '../Services/login.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= {username: '', password: '',remember: false}
  constructor(public dialogRef:MatDialogRef<LoginComponent>, public loginsvc: LoginService,private httpService: HttpClient) { }
  loginDetails:login[] = [];
  valid:boolean=false;
  newUser:boolean=false;
  ngOnInit(): void {
    this.httpService.get('/assets/Json/login.json').subscribe((data)=>{this.loginDetails=data as login[] ;});
  }
  submitForm(){
    //console.log('User:', this.user);
   // alert("in submit");
  // this.loginsvc.VerifyUser().subscribe((data)=>{this.loginDetails =data;});
 for(let i=0;i<this.loginDetails.length;i++)
 {
   if(this.user.username== this.loginDetails[i].Name && this.user.password==this.loginDetails[i].password){
     this.valid=true;
     break;
   }
   
 }
 if(!this.valid && !this.newUser)
 {
  alert("You are not UnAuthorised , Please Sign Up...");

  
 }
 else
 {
  this.dialogRef.close();
 }
  }
  signUp()
  {
    for(let i=0;i<this.loginDetails.length;i++)
 {
   if(this.user.username== this.loginDetails[i].Name && this.user.password==this.loginDetails[i].password){
     this.valid=true;
     break;
   }
  }
  this.newUser=true;
   if(this.valid){
     alert('Already have same account , use some other Username Passowrd..')
   }
   else
   {
     alert('You are registered!')
    }
   
 }
}


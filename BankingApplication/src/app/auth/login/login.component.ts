import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router:Router){
   // localStorage.setItem(username,uname)
  }
  validate(login: NgForm){
    console.log(login)
    let uname=login.value.email;
    let pwd=login.value.pswd;
    if(uname=="Dell"|| uname=="admin" && pwd=="DellIndia"){
    alert("login success");
    localStorage.setItem("username",uname)
    this.router.navigate(['emps']);
    }
    else{
      alert("login failed");
      this.router.navigate(['register']);
    }

  }
}

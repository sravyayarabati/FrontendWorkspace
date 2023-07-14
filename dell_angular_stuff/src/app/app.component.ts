import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'dell_angular_stuff';
  username:String="Dell";
  childdata :string
  parentMethod(cdata){
this.childdata=cdata;
  }

  constructor(private router: Router,private service:UsersService)
  { }
  checkLogin():boolean
  {
    return this.service.isUserLoggedIn()
  }
  Logout()
  {
    localStorage.removeItem("username");
    alert("Logged Out Successfully ")
    this.router.navigate(['login']);
    
  }
}

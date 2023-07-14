import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  constructor(private router:Router, private service:UsersService){
    
  }
  onSubmit(user:User) : any{
  console.log("in submit");
  this.service.addUser(user).subscribe(data=>{alert("User added successfully")})
  this.router.navigate(['users']);
  }
}

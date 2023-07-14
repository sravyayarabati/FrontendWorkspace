import { Component } from '@angular/core';
import { User, UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  uid :Number
constructor(private router:Router,private service:UsersService){
  
}
/* ngOnInit(): void {
  this.uid=this.service.getUserToUpdate().id;
  console.log("oninit ..."+this.uid)
} */
onUpdate(user:User){
  alert("onUpdate"+user.id+ user.name+user.email)
  this.service.updateUserInServer(user).subscribe(data=>{alert("User updated successfully")});
  this.router.navigate(['users']);
}
}

import { Component, OnInit } from '@angular/core';
import { User, UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersinfo:User[];
constructor(private router:Router,private service:UsersService){

}
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>this.handleSuccessfulResponse(data))
  }
  handleSuccessfulResponse(data) {
    this.usersinfo=data;
  }
  onDelete(user:User){
    var selection=confirm("Are you sure?");
    if(selection==true){
      this.usersinfo.slice(this.usersinfo.indexOf(user),1);
      this.service.deleteEmployee(user.id).subscribe(data=>{
        alert('Deleted successfully')
      })
      this.router.navigate(['users']);
    }
  }
    onUpdate(user:User){
      this.service.updateUser(user);
      this.router.navigate(['updateuser']); 
       }
    

 
}

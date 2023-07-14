import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  user:any
  constructor(private aroute:ActivatedRoute,private service:UsersService){

  }
  ngOnInit(){
    console.log(this.aroute)
    console.log(this.aroute)
     let uid=this.aroute.snapshot.params['id'];
     this.service.getUser(uid).subscribe(user=>{
      console.log(user);
      this.user=user
    })
  }
}

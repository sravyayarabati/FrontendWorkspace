import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uname:string;
  usertoUpdate : User;
  constructor(private client:HttpClient) { }
  public getEmployees(){
    console.log("In get employee");
    return this.client.get<User>("http://localhost:3000/users");
  }
  public getUser(id:number) {
    console.log("in service get user");//headers
    return this.client.get<User>("http://localhost:3000/users/"+id);
  }
  isUserLoggedIn():boolean
  {
  this.uname=localStorage.getItem("username")
    if(this.uname!=null)
      return true
    else
      return false
  }
  public deleteEmployee(uid){
    console.log("In Delete employee");
    return this.client.delete<User>("http://localhost:3000/users/"+uid);
  }
  public addUser(user:User){
    console.log("In Add User service")
    return this.client.post("http://localhost:3000/users",user);
  }
  public updateUser(user:User){
    console.log("In update User service")
    this.usertoUpdate=user;
    
  }
  public getUserToUpdate()
  {
    console.log("get user "+this.usertoUpdate)
    return this.usertoUpdate;
  }
  public updateUserInServer(user:User){
    console.log("In update User in Server service")
    return this.client.put("http://localhost:3000/users/"+this.usertoUpdate.id,user);
  }
}

export class User{
  id: number;
  name: string;
  email: string;
  constructor(userid, username, email) {
    this.id = userid;
    this.name = username;
    this.email = email;
  }

  
}

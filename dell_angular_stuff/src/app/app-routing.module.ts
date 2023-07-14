import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { adminGuard } from './admin.guard';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"emps",component:EmployeeComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"updateuser",component:UpdateuserComponent},
  {path:"getuser/:id",component:GetUserComponent},
  {path:"users",component:UsersComponent,canActivate:[adminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

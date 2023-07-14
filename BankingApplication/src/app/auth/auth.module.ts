import { Router, RouterModule } from "@angular/router";
import SharedModule from "../shared.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const routes=[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
];
@NgModule({
    imports:[SharedModule,RouterModule.forChild(routes), FormsModule],
    exports:[RouterModule],
    declarations:[LoginComponent,RegisterComponent]
})
export default class AuthModule{

}
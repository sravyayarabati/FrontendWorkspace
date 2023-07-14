import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import SharedModule from "../shared.module";
const routes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];
@NgModule({
    imports: [
        SharedModule,RouterModule.forChild(routes)
    ],
    declarations:[
        LoginComponent,
        SignupComponent
    ],
    exports:[
        RouterModule
    ]
})
export default class AuthModule{
    
}
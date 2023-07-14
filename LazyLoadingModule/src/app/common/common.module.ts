import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import SharedModule from "../shared.module";


const routes:Routes=[
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactUsComponent}
];
@NgModule({
    imports: [
        SharedModule,RouterModule.forChild(routes)
    ],
    declarations:[
        AboutusComponent,
        ContactUsComponent
    ],
    exports:[
        RouterModule
    ]
})
export default class CommonModule{
    
}
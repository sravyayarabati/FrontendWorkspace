import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import AuthModule from './auth/auth.module';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"auth",
    loadChildren:()=>import('./auth/auth.module').then(m=>m.default)},
  {path:"common",
    loadChildren:()=>import('./common/common.module').then(m=>m.default)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

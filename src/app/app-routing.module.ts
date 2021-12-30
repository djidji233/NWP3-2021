import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserAddComponent} from "./components/user-add/user-add.component";
import {UserEditComponent} from "./components/user-edit/user-edit.component";

const routes: Routes = [
  // http://localhost:4200/
  { path: '', component: LoginComponent},
  // http://localhost:4200/users
  { path: 'home', component: UserListComponent, canActivate: [AuthGuard]},
  // http://localhost:4200/users/add
  { path: 'home', component: UserAddComponent, canActivate: [AuthGuard]},
  // http://localhost:4200/users/edit/{id}
  { path: 'home', component: UserEditComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

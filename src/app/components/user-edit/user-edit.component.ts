import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {PermissionClass, PermissionType, User, UserClass} from "../../model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public id: number
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string
  public createp: boolean;
  public readp: boolean
  public updatep: boolean
  public deletep: boolean


  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.createp = false
    this.readp = false
    this.updatep = false
    this.deletep = false
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      console.log(this.id);
    })
  }

  ngOnInit(): void {


    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      let user = users.filter(user => user.id === this.id)[0];
      this.firstName = user.firstName
      this.lastName = user.lastName
      this.email = user.email
      this.password = user.password
      //   for(let permission in user.permissions){
      //
      //   }
      //   this.firstName = user.firstName
      //   this.firstName = user.firstName
      //   this.firstName = user.firstName
    });


  }

  editUser(id:number,firstName: string, lastName: string, email: string, password: string, createp: boolean, readp: boolean, updatep: boolean, deletep: boolean) {
    //console.log(firstName,lastName,email,password,createp,readp,updatep,deletep)
    let createpermission = new PermissionClass(PermissionType.CAN_CREATE_USERS, createp)
    let readpermission = new PermissionClass(PermissionType.CAN_READ_USERS, readp)
    let updatepermission = new PermissionClass(PermissionType.CAN_UPDATE_USERS, updatep)
    let deletepermission = new PermissionClass(PermissionType.CAN_DELETE_USERS, deletep)
    let permissions = []
    permissions.push(createpermission, readpermission, updatepermission, deletepermission)
    // let user = new UserClass(firstName, lastName, email, password)
    // user.addPermission(createpermission)
    // user.addPermission(readpermission)
    // user.addPermission(updatepermission)
    // user.addPermission(deletepermission)
    this.userService.updateUser(id,firstName, lastName, email, password,permissions).subscribe(user=>{
      console.log(user)
    })
  }

}

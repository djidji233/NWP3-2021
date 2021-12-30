import {Component, OnInit} from '@angular/core';
import {PermissionClass, PermissionType, UserClass} from "../../model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string
  public createp: boolean;
  public readp: boolean
  public updatep: boolean
  public deletep: boolean


  constructor(private userService: UserService) {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.createp = false
    this.readp = false
    this.updatep = false
    this.deletep = false
  }

  ngOnInit(): void {
  }

  addUser(firstName: string, lastName: string, email: string, password: string, createp: boolean, readp: boolean, updatep: boolean, deletep: boolean) {
    //console.log(firstName,lastName,email,password,createp,readp,updatep,deletep)
    let createpermission = new PermissionClass(PermissionType.CAN_CREATE_USERS, createp)
    let readpermission = new PermissionClass(PermissionType.CAN_READ_USERS, readp)
    let updatepermission = new PermissionClass(PermissionType.CAN_UPDATE_USERS, updatep)
    let deletepermission = new PermissionClass(PermissionType.CAN_DELETE_USERS, deletep)
    let permissions = []
    permissions.push(createpermission, readpermission, updatepermission, deletepermission)
    let user = new UserClass(firstName, lastName, email, password,permissions)
    this.userService.addUser(firstName, lastName, email, password,permissions).subscribe(user=>{
      console.log(user)
    })
  }

}

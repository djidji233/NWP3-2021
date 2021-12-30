export interface LoginResponse {
  jwt: string;
}

export enum PermissionType {
  CAN_CREATE_USERS,
  CAN_READ_USERS,
  CAN_UPDATE_USERS,
  CAN_DELETE_USERS
}

export interface Permission {
  id: number,
  type: PermissionType,
  value: boolean,
  user: User
}

export class PermissionClass {
  constructor(public type: PermissionType,
              public value: boolean) {
  }
}

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  permissions: Permission[]
}

export class UserClass {
  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public password: string,
              public permissions: PermissionClass[]) {
  }
}

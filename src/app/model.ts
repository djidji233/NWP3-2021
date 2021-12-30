export interface LoginResponse {
  jwt: string;
}

export enum PermissionType {
  CAN_CREATE_USERS,
  CAN_READ_USERS,
  CAN_UPDATE_USERS,
  CAN_DELETE_USERS
}

export class Permission {
  constructor(public id:number,
              public type: PermissionType,
              public value: boolean,
              public user: User) {
  }
}

export class User {
  constructor(public id: number,
              public firstName: string,
              public lastName: string,
              public email: string,
              public password: string,
              public permissions: Permission[]) {

  }

  getPermissions(): Permission[] {
    return this.permissions
  }

}

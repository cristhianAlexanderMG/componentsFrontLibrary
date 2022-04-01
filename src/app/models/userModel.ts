import { LoginService } from "../services/login.service";
import { EnumerablesTypesApp } from "./enumerablesTypesApp";

export class UserModel {
  private status: string = EnumerablesTypesApp.enumStatusLogin.inactive;
  private name: string = '';
  private token: string = '';
  private missingTime: number = 0; 

  public getUserModelComplete(): UserModel {
    return new UserModel();
  }

  public getStatusUser(): string {
    return this.status;
  }

}
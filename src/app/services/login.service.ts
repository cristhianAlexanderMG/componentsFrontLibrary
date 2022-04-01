import { Injectable } from '@angular/core';
import { ResponseData } from '../models/responseData';
import { EnumerablesTypesApp } from '../models/enumerablesTypesApp';
import { UserModel } from '../models/userModel';
import { MessageModel } from '../models/messageModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  async login(name: string, password: string): Promise<ResponseData> {
    let a = new UserModel();
    return await {
      data: new UserModel(),
      status: EnumerablesTypesApp.enumStatusResponseData.success,
      message: new MessageModel()
    }
  }

}

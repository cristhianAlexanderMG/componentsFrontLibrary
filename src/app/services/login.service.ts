import { Injectable } from '@angular/core';
import { ResponseData } from '../models/responseData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  async login(user: string, password: string): Promise<ResponseData> {
    return await new ResponseData();
  }

}

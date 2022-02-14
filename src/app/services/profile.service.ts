import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {
    return {
      id: 1,
      name: "Laura",
      lastName: "Duarte",
      address: "Tunja",
      mobile: "11",
      email: "correo@corre.co"
    };
  }
}

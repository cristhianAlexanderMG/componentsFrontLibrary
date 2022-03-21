import { Injectable } from '@angular/core';
import { MessageModel } from '../models/messageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  showMessage(message: MessageModel) { };
}

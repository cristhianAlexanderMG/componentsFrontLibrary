import {EnumerablesTypesApp} from "./enumerablesTypesApp";
import { MessageModel } from "./messageModel";

export class ResponseData {
  data: any = null;
  status: string = EnumerablesTypesApp.enumStatusResponseData.error;
  message: MessageModel = new MessageModel();
}

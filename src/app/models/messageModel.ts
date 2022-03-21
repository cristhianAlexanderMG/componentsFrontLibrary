import { EnumerablesTypesApp } from "./enumerablesTypesApp";

export class MessageModel {
  type: string = EnumerablesTypesApp.enumSeverity.Success;
  title: string = 'Titulo Mensaje';
  message: string = 'Mensaje Prueba';
}

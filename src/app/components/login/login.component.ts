import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnumerablesTypesApp } from 'src/app/models/enumerablesTypesApp';
import { ResponseData } from 'src/app/models/responseData';
import { LoginService } from 'src/app/services/login.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Enumerables
  enumSize = EnumerablesTypesApp.enumSize;
  enumSeverity = EnumerablesTypesApp.enumSeverity;
  enumStatusResponseData = EnumerablesTypesApp.enumStatusResponseData;

  // Data button
  labelButton: string = 'Login';
  loadingButton: boolean = false;
  disabledButton: boolean = false;

  // Fields
  dataUser = {
    label: 'Username',
    tooltip: 'Usuario',
    type: EnumerablesTypesApp.enumTypeInput.Text,
    value: '',
    required: true,
    disabled: false
  };

  dataPassword = {
    label: 'Password',
    tooltip: 'Contraseña',
    type: EnumerablesTypesApp.enumTypeInput.Password,
    value: '',
    required: true,
    disabled: false
  };

  constructor(private loginService: LoginService, private messageService: MessageService) { }

  login() {
    this.changeStatusToFields(true);
    this.loginService.login(this.dataUser.value, this.dataPassword.value)
      .then((x: ResponseData) => {
        this.messageService.showMessage(x.message);
        this.changeStatusToFields(!(x.status == this.enumStatusResponseData.success))
      })
      .catch(x => {
        this.changeStatusToFields(false)
      });
  }

  validations() {
    this.disabledButton = (this.dataPassword.value == '' || this.dataUser.value == '');
  }

  private changeStatusToFields(status: boolean) {
    this.loadingButton = status;
    this.dataPassword.disabled = status;
    this.dataUser.disabled = status;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthenticateService } from './../services/authenticate.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationsMessages = {
    email: [
      {type: 'required', message: 'Requerido'},
      {type: 'pattern', message: 'no valido'}
    ]
  };
  errMsg = '';
  constructor(
    private formBuilder: FormBuilder,
    private authenticateService: AuthenticateService,
    private router: Router,
    private storage: Storage,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }

  loginUser(credencial){
    this.authenticateService.loginUser(credencial)
    .then(res => {
      this.errMsg = '';
      this.storage.set('isUserLoggedIn', true);
      this.router.navigateByUrl('/menu/home');
    });
  }
  goToRegister(){
    this.router.navigateByUrl('/register');
  }
}

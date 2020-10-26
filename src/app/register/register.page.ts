import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    });
  }

  ngOnInit() {
  }
  RegisterUser(userData){
    this.authenticateService.registerUser(userData)
    .then(() => {
      this.router.navigateByUrl('/login');
    });
    }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}

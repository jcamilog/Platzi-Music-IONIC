import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(
    private storage: Storage
  ) { }
  loginUser(credenciales){
    return new Promise ((accept, reject) => {
      if (credenciales.email === 'test@test.com' && credenciales.password === '12345'){
        accept('login correcto');
      } else {
        reject('Login incorrecto');
      }
    });
  }
  registerUser(userData){
    return this.storage.set('user', userData);
  }
}

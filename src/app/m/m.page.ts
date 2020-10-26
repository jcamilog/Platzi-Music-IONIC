import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-m',
  templateUrl: './m.page.html',
  styleUrls: ['./m.page.scss'],
})
export class MPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  closeMenu(){
    this.menu.close();
  }
  logout(){
    this.storage.remove('isUserLoggedIn');
    this.navCtrl.navigateRoot('/login');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MPageRoutingModule } from './m-routing.module';

import { MPage } from './m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MPageRoutingModule
  ],
  declarations: [MPage]
})
export class MPageModule {}

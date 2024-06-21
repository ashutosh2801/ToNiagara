import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateToursPageRoutingModule } from './private-tours-routing.module';

import { PrivateToursPage } from './private-tours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateToursPageRoutingModule
  ],
  declarations: [PrivateToursPage]
})
export class PrivateToursPageModule {}

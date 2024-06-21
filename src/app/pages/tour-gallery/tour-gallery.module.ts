import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourGalleryPageRoutingModule } from './tour-gallery-routing.module';

import { TourGalleryPage } from './tour-gallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourGalleryPageRoutingModule
  ],
  declarations: [TourGalleryPage]
})
export class TourGalleryPageModule {}

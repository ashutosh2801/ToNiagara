import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourGalleryPage } from './tour-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: TourGalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourGalleryPageRoutingModule {}

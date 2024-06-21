import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateToursPage } from './private-tours.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateToursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateToursPageRoutingModule {}

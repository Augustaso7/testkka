import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemPage } from './ejem.page';

const routes: Routes = [
  {
    path: '',
    component: EjemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemPageRoutingModule {}

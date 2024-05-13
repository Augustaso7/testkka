import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemPageRoutingModule } from './ejem-routing.module';

import { EjemPage } from './ejem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemPageRoutingModule
  ],
  declarations: [EjemPage]
})
export class EjemPageModule {}

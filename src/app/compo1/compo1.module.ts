import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Compo1Component } from './compo1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Compo1Component],
  exports: [Compo1Component]
})
export class Compo1ComponentModule {}
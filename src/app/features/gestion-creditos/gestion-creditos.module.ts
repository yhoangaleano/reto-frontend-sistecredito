import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionCreditosRoutingModule } from './gestion-creditos-routing.module';
import { GestionCreditosComponent } from './gestion-creditos.component';


@NgModule({
  declarations: [
    GestionCreditosComponent
  ],
  imports: [
    CommonModule,
    GestionCreditosRoutingModule
  ]
})
export class GestionCreditosModule { }

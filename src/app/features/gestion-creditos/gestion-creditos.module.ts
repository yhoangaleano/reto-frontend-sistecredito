import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { GestionCreditosRoutingModule } from './gestion-creditos-routing.module';

// Componente principal
import { GestionCreditosComponent } from './gestion-creditos.component';

// Paginas
import { GESTION_CREDITOS_PAGES } from './pages';

@NgModule({
  declarations: [
    GestionCreditosComponent,
    ...GESTION_CREDITOS_PAGES,
  ],
  imports: [
    CommonModule,
    GestionCreditosRoutingModule
  ],
  exports: [
    GestionCreditosComponent
  ]
})
export class GestionCreditosModule { }

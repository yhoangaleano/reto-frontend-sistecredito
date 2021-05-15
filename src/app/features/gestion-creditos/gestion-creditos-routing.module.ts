import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente principal
import { GestionCreditosComponent } from './gestion-creditos.component';

const gestionCreditosRoutes: Routes = [
  {
    path: '',
    component: GestionCreditosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(gestionCreditosRoutes)],
  exports: [RouterModule]
})
export class GestionCreditosRoutingModule { }

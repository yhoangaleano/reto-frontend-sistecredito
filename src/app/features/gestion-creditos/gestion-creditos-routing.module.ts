import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componente principal
import { GestionCreditosComponent } from './gestion-creditos.component';

// Paginas
import { CreditosComponent } from './pages';

const gestionCreditosRoutes: Routes = [
  {
    path: '',
    component: GestionCreditosComponent,
    children: [
      {
        path: 'creditos',
        component: CreditosComponent,
        data: {
          title: 'Gestión de créditos'
        },
      },
      {
        path: '',
        redirectTo: 'creditos',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(gestionCreditosRoutes)],
  exports: [RouterModule]
})
export class GestionCreditosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'gestion-creditos',
    loadChildren: () => import('./features/gestion-creditos/gestion-creditos.module')
      .then(
        m => m.GestionCreditosModule
      )
  },
  {
    path      : '',
    redirectTo: 'gestion-creditos',
    pathMatch : 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

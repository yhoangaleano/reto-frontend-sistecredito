import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NgBootstrap Módulos
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// NgxSpinner
import { NgxSpinnerModule } from 'ngx-spinner';

// Módulos internos
import { NgxErrorsModule } from '@shared/directives';

// Servicios Utilidades
import { ValidarFormulariosService } from '@shared/utils';

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
    FormsModule,
    ReactiveFormsModule,
    GestionCreditosRoutingModule,

    // NgBootstrap Módulos
    NgbModalModule,

    // NgxSpinner
    NgxSpinnerModule,

    // Módulos internos
    NgxErrorsModule,
  ],
  exports: [
    GestionCreditosComponent
  ],
  providers: [
    ValidarFormulariosService,
  ]
})
export class GestionCreditosModule { }

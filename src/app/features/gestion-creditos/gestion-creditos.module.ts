import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NgBootstrap Módulos
import { NgbModalModule, NgbTypeaheadModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// NgxSpinner
import { NgxSpinnerModule } from 'ngx-spinner';

// Ng2CurrencyMask
import { CURRENCY_MASK_CONFIG, CurrencyMaskModule } from 'ng2-currency-mask';

// Constantes
import { CONFIGURACION_NG2_CURRENCY_MASK } from './constants';

// Módulos internos
import { NgxErrorsModule } from '@shared/directives';

// Servicios Utilidades
import { ValidarFormulariosService } from '@shared/utils';

// Pipes
import { TipoDocumentoPipe } from '@shared/pipes';

// Routing
import { GestionCreditosRoutingModule } from './gestion-creditos-routing.module';

// Componente principal
import { GestionCreditosComponent } from './gestion-creditos.component';

// Paginas
import { GESTION_CREDITOS_PAGES } from './pages';

// Servicios http
import { GESTION_CREDITOS_SERVICES } from './http-services';

@NgModule({
  declarations: [
    GestionCreditosComponent,
    ...GESTION_CREDITOS_PAGES,
    TipoDocumentoPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GestionCreditosRoutingModule,

    // NgBootstrap Módulos
    NgbModalModule,
    NgbTypeaheadModule,
    NgbTooltipModule,

    // NgxSpinner
    NgxSpinnerModule,

    // Ng2CurrencyMask
    CurrencyMaskModule,

    // Módulos internos
    NgxErrorsModule,
  ],
  exports: [
    GestionCreditosComponent
  ],
  providers: [
    ...GESTION_CREDITOS_SERVICES,
    ValidarFormulariosService,
    {
      provide: CURRENCY_MASK_CONFIG, useValue: CONFIGURACION_NG2_CURRENCY_MASK
    }
  ],
})
export class GestionCreditosModule { }

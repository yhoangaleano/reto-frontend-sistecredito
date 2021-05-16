import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// NgxToastr
import { ToastrModule } from 'ngx-toastr';

// Importar lenguaje de Colombia
import locale_ES_CO from '@angular/common/locales/es-CO';

// Registrar el lenguaje
registerLocaleData(locale_ES_CO);

// Core Module
import { CoreModule } from '@core/core.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Componente principal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,

    // NgxToastr
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

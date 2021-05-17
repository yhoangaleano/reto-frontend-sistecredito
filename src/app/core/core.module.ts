import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Main Layout Module
import { MainLayoutModule } from './main-layout/main-layout.module';

// Interceptores
import { INTERCEPTORS } from './interceptors';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MainLayoutModule,
  ],
  exports: [
    MainLayoutModule,
  ],
  providers: [
    ...INTERCEPTORS
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`CoreModule ya ha sido cargado. Se debe importar solamente en el AppModule.`);
    }
  }
}

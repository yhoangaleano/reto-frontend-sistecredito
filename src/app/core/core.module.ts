import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Main Layout Module
import { MainLayoutModule } from './main-layout/main-layout.module';

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

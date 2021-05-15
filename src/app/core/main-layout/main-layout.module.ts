import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// NgBootstrap Módulos
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Componente principal
import { MainLayoutComponent } from './main-layout.component';

// Componentes secundarios
import { MAIN_LAYOUT_COMPONENTS } from './components';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ...MAIN_LAYOUT_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,

    // NgBootstrap Módulos
    NgbDropdownModule
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class MainLayoutModule { }

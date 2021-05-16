import { Component, OnInit, ViewChild } from '@angular/core';

// Constantes
import { TEXTO_CREAR_CREDITO, TEXTO_MODIFICAR_CREDITO } from './constants';

// Modal Formulario
import { ModalFormularioCreditoComponent } from './../../presentation-components/modal-formulario-credito/modal-formulario-credito.component';

@Component({
  selector: 'app-creditos-nuevos',
  templateUrl: './creditos-nuevos.component.html',
  styleUrls: ['./creditos-nuevos.component.scss']
})
export class CreditosNuevosComponent implements OnInit {

  @ViewChild('modalFormularioCredito')
  modalFormularioCredito!: ModalFormularioCreditoComponent;

  public textoTituloModal: string;

  constructor() {
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
  }

  ngOnInit(): void {
  }

  abrirModalFormularioCredito(): void {
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
    this.modalFormularioCredito.abrirModalFormularioCredito();
  }

  cerrarModal(): void {
    this.modalFormularioCredito.cerrarModalFormularioCredito();
  }

}

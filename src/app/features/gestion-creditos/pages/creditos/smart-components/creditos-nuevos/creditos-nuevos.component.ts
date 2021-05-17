import { Component, OnInit, ViewChild } from '@angular/core';

// Servicios Http
import { CreditosService } from '@app/features/gestion-creditos/http-services';

// Constantes
import { TEXTO_CREAR_CREDITO, TEXTO_MODIFICAR_CREDITO } from './constants';

// Modelos
import { InformacionCreditoNuevo } from '@features/gestion-creditos/models/domains';

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
  public informacionCreditoNuevoEditar: InformacionCreditoNuevo | null;
  public informacionCreditosNuevos: Array<InformacionCreditoNuevo>;

  constructor(
    private readonly creditosService: CreditosService
  ) {
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
    this.informacionCreditoNuevoEditar = null;
    this.informacionCreditosNuevos = [];
  }

  ngOnInit(): void {
    this.cargarListaInformacionCreditosNuevos();
  }

  private cargarListaInformacionCreditosNuevos(): void {
    this.creditosService.obtenerInformacionCreditosNuevos().subscribe({
      next: (informacionCreditosNuevos: Array<InformacionCreditoNuevo>) => {
        this.informacionCreditosNuevos = [...informacionCreditosNuevos];
      }
    });
  }

  public crearNuevoCredito(): void {
    this.modalFormularioCredito.abrirModalFormularioCredito();
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
    this.informacionCreditoNuevoEditar = null;
  }

  public cerrarModal(): void {
    this.modalFormularioCredito.cerrarModalFormularioCredito();
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
    this.informacionCreditoNuevoEditar = null;
  }

  public guardarInformacionCreditoNuevo(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    console.log(informacionCreditoNuevo);
    this.cerrarModal();
  }

  public editarInformacionCreditoNuevo(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    this.modalFormularioCredito.abrirModalFormularioCredito();
    this.textoTituloModal = TEXTO_MODIFICAR_CREDITO;
    this.informacionCreditoNuevoEditar = { ...informacionCreditoNuevo };
  }

}

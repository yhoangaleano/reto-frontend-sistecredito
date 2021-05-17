import { concatMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

// Rxjs
import { Subscription } from 'rxjs';

// NgxSpinner
import { NgxSpinnerService } from 'ngx-spinner';

// NgxToastr
import { ToastrService } from 'ngx-toastr';

// Servicios Http
import { CreditosService } from '@app/features/gestion-creditos/http-services';

// Constantes
import {
  TEXTO_CREAR_CREDITO, TEXTO_MODIFICAR_CREDITO,
  TEXTO_ALERTA_CREDITO_CREADO, TEXTO_ALERTA_CREDITO_MODIFICADO
} from './constants';

// Modelos
import { InformacionCreditoNuevo } from '@features/gestion-creditos/models/domains';

// Modal Formulario
import { ModalFormularioCreditoComponent } from './../../presentation-components/modal-formulario-credito/modal-formulario-credito.component';


@Component({
  selector: 'app-creditos-nuevos',
  templateUrl: './creditos-nuevos.component.html',
  styleUrls: ['./creditos-nuevos.component.scss']
})
export class CreditosNuevosComponent implements OnInit, OnDestroy {

  @ViewChild('modalFormularioCredito')
  modalFormularioCredito!: ModalFormularioCreditoComponent;

  public suscripciones!: Array<Subscription | undefined>;

  public textoTituloModal: string;
  public informacionCreditoNuevoEditar: InformacionCreditoNuevo | null;
  public informacionCreditosNuevos: Array<InformacionCreditoNuevo>;

  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
    private readonly creditosService: CreditosService
  ) {
    this.suscripciones = [];
    this.textoTituloModal = TEXTO_CREAR_CREDITO;
    this.informacionCreditoNuevoEditar = null;
    this.informacionCreditosNuevos = [];
  }

  ngOnInit(): void {
    this.cargarListaInformacionCreditosNuevos();
  }

  ngOnDestroy(): void {
    this.suscripciones.forEach((suscripcion) => suscripcion?.unsubscribe());
  }

  private cargarListaInformacionCreditosNuevos(): void {
    this.spinner.show();
    this.suscripciones.push(
      this.creditosService.obtenerInformacionCreditosNuevos().subscribe({
        next: (informacionCreditosNuevos: Array<InformacionCreditoNuevo>) => {
          this.establecerListainformacionCreditosNuevos(informacionCreditosNuevos);
        },
        error: () => {
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
        }
      })
    );
  }

  private establecerListainformacionCreditosNuevos(informacionCreditosNuevos: Array<InformacionCreditoNuevo>): void {
    this.informacionCreditosNuevos = informacionCreditosNuevos ? [...informacionCreditosNuevos] : [];
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
    this.validarPeticion(informacionCreditoNuevo);
    this.cerrarModal();
  }

  private validarPeticion(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    if (informacionCreditoNuevo && informacionCreditoNuevo?.id) {
      this.modificarInformacionCreditosNuevos(informacionCreditoNuevo);
    } else {
      this.crearInformacionCreditosNuevos(informacionCreditoNuevo);
    }
  }

  private crearInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    this.spinner.show();
    this.suscripciones.push(
      this.creditosService.crearInformacionCreditosNuevos(informacionCreditoNuevo).pipe(
        concatMap(() => this.creditosService.obtenerInformacionCreditosNuevos())
      ).subscribe({
        next: (informacionCreditosNuevos: Array<InformacionCreditoNuevo>) => {
          this.establecerListainformacionCreditosNuevos(informacionCreditosNuevos);
          this.toastr.success(TEXTO_ALERTA_CREDITO_CREADO);
        },
        error: () => {
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
        }
      })
    );
  }

  private modificarInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    this.spinner.show();
    this.suscripciones.push(
      this.creditosService.modificarInformacionCreditosNuevos(informacionCreditoNuevo).pipe(
        concatMap(() => this.creditosService.obtenerInformacionCreditosNuevos())
      ).subscribe({
        next: (informacionCreditosNuevos: Array<InformacionCreditoNuevo>) => {
          this.establecerListainformacionCreditosNuevos(informacionCreditosNuevos);
          this.toastr.success(TEXTO_ALERTA_CREDITO_MODIFICADO);
        },
        error: () => {
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
        }
      })
    );
  }

  public editarInformacionCreditoNuevo(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    this.modalFormularioCredito.abrirModalFormularioCredito();
    this.textoTituloModal = TEXTO_MODIFICAR_CREDITO;
    this.informacionCreditoNuevoEditar = { ...informacionCreditoNuevo };
  }

}

import {
  Component, EventEmitter, ViewChild,
  OnInit,
  Input, Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// NgxToastr
import { ToastrService } from 'ngx-toastr';

// Módulos internos
import { VALIDATION_ERRORS_MESSAGES } from '@shared/directives';

// Constantes
import { MENSAJE_VALIDACION_FORMULARIO } from './constants';

// Servicios Utilidades
import { ValidarFormulariosService } from '@shared/utils';

// Modelos
import { InformacionCreditoNuevo, CreditoDomain, ClienteDomain, UbicacionDomain } from '@features/gestion-creditos/models/domains';

// Componentes ViewChild
import { FormularioClienteComponent } from './../formulario-cliente/formulario-cliente.component';
import { FormularioDireccionComponent } from './../formulario-direccion/formulario-direccion.component';
import { FormularioCreditoComponent } from './../formulario-credito/formulario-credito.component';

@Component({
  selector: 'app-formulario-creditos-nuevos',
  templateUrl: './formulario-creditos-nuevos.component.html',
  styleUrls: ['./formulario-creditos-nuevos.component.scss']
})
export class FormularioCreditosNuevosComponent implements OnInit {

  @Input()
  public informacionCreditoNuevoEditar!: InformacionCreditoNuevo | null;

  @Output()
  public guardarCreditoEmitter: EventEmitter<InformacionCreditoNuevo>;

  @Output()
  public cancelarEmitter: EventEmitter<void>;

  @ViewChild(FormularioClienteComponent, { static: true })
  formularioCliente!: FormularioClienteComponent;

  @ViewChild(FormularioDireccionComponent, { static: true })
  formularioDireccion!: FormularioDireccionComponent;

  @ViewChild(FormularioCreditoComponent, { static: true })
  formularioCredito!: FormularioCreditoComponent;

  public formularioCreditosNuevos!: FormGroup;
  public mensajesErrorValidacion!: any;

  constructor(
    private readonly fb: FormBuilder,
    private readonly toastr: ToastrService,
    private readonly validarFormularios: ValidarFormulariosService,
  ) {
    this.mensajesErrorValidacion = VALIDATION_ERRORS_MESSAGES;
    this.guardarCreditoEmitter = new EventEmitter<InformacionCreditoNuevo>();
    this.cancelarEmitter = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.establecerFormularioEditar();
  }

  public crearFormulario(): FormGroup {
    this.formularioCreditosNuevos = this.fb.group({
      cliente: this.formularioCliente.crearFormulario(),
      ubicacion: this.formularioDireccion.crearFormulario(),
      credito: this.formularioCredito.crearFormulario(),
    });
    return this.formularioCreditosNuevos;
  }

  private establecerFormularioEditar(): void {
    if (this.informacionCreditoNuevoEditar) {
      this.establecerClienteFormulario(this.informacionCreditoNuevoEditar?.cliente);
      this.establecerUbicacionFormulario(this.informacionCreditoNuevoEditar?.ubicacion);
      this.establecerCreditoFormulario(this.informacionCreditoNuevoEditar?.credito);
    }
  }

  private establecerClienteFormulario(cliente: ClienteDomain): void {
    this.formularioCreditosNuevos.get('cliente')?.patchValue(cliente);
  }

  private establecerUbicacionFormulario(ubicacion: UbicacionDomain): void {
    this.formularioCreditosNuevos.get('ubicacion')?.patchValue(ubicacion);
  }

  private establecerCreditoFormulario(credito: CreditoDomain): void {
    this.formularioCreditosNuevos.get('credito')?.patchValue(credito);
  }

  public guardarCredito(): void {
    this.validarFormularios.validarFormulario(this.formularioCreditosNuevos);
    if (this.formularioCreditosNuevos.valid) {
      this.guardarCreditoEmitter.emit(this.obtenerInformacionCreditosNuevoFormulario());
    } else {
      this.toastr.error(MENSAJE_VALIDACION_FORMULARIO);
    }
  }

  private obtenerInformacionCreditosNuevoFormulario(): InformacionCreditoNuevo {
    let informacionCreditoNuevo: InformacionCreditoNuevo;
    if (this.informacionCreditoNuevoEditar) {
      informacionCreditoNuevo = { ...this.informacionCreditoNuevoEditar } as InformacionCreditoNuevo;
    } else {
      informacionCreditoNuevo = new InformacionCreditoNuevo();
    }
    informacionCreditoNuevo.cliente = { ...this.obtenerClienteFormulario() };
    informacionCreditoNuevo.ubicacion = { ...this.obtenerUbicacionFormulario() };
    informacionCreditoNuevo.credito = { ...this.obtenerCreditoFormulario() };

    return informacionCreditoNuevo;
  }

  private obtenerClienteFormulario(): ClienteDomain {
    return this.formularioCreditosNuevos.get('cliente')?.value as ClienteDomain;
  }

  private obtenerUbicacionFormulario(): UbicacionDomain {
    return this.formularioCreditosNuevos.get('ubicacion')?.value as UbicacionDomain;
  }

  private obtenerCreditoFormulario(): CreditoDomain {
    return this.formularioCreditosNuevos.get('credito')?.value as CreditoDomain;
  }

  public cancelar(): void {
    this.cancelarEmitter.emit();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Rxjs
import { Subscription } from 'rxjs';

// Constantes
import { TIPOS_IDENTIFICACION, TIPOS_IDENTIFICACION_NUMERICAS } from './constants';

// Módulos internos
import { VALIDATION_ERRORS_MESSAGES } from '@shared/directives';

// Modelos
import { ListaBasicaPresenter } from '@features/gestion-creditos/models';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit, OnDestroy {

  public tiposIdentificacion: Array<ListaBasicaPresenter<string>>;

  public formularioCliente!: FormGroup;
  public mensajesErrorValidacion!: any;
  public suscripciones!: Array<Subscription | undefined>;

  constructor(private readonly fb: FormBuilder) {
    this.tiposIdentificacion = TIPOS_IDENTIFICACION;
    this.mensajesErrorValidacion = VALIDATION_ERRORS_MESSAGES;
    this.suscripciones = [];
  }

  ngOnInit(): void {
    this.escucharCambiosTipoIdentificacion();
  }

  ngOnDestroy(): void {
    this.suscripciones.forEach((suscripcion) => suscripcion?.unsubscribe());
  }

  private escucharCambiosTipoIdentificacion(): void {
    this.suscripciones.push(
      this.formularioCliente.get('tipoIdentificacion')?.valueChanges.subscribe({
        next: (valor: string) => {
          this.formularioCliente.get('identificacion')?.clearValidators();
          this.formularioCliente.get('identificacion')?.setValidators(
            [
              Validators.required,
              Validators.pattern(
                this.obtenerExpersionRegularValidacionIdentificacion(valor)
              )
            ]
          );
          this.formularioCliente.get('identificacion')?.markAsDirty();
          this.formularioCliente.get('identificacion')?.markAsTouched();
          this.formularioCliente.get('identificacion')?.updateValueAndValidity();
        }
      })
    );
  }

  private obtenerExpersionRegularValidacionIdentificacion(valorTipoIdentificacion: string): string {
    if ((TIPOS_IDENTIFICACION_NUMERICAS.includes(valorTipoIdentificacion))) {
      return '^[0-9]+$';
    } else {
      return '^[a-zA-Z0-9]+$';
    }
  }

  crearFormulario(): FormGroup {
    this.formularioCliente = this.fb.group({
      nombres: ['', [Validators.required, Validators.pattern('^[A-Za-zÑñ]+([ ][A-Za-zÑñ]+)*$'), Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.pattern('^[A-Za-zÑñ]+([ ][A-Za-zÑñ]+)*$'), Validators.maxLength(50)]],
      celular: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email, Validators.maxLength(60)]],
      tipoIdentificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(15)]],
    });

    return this.formularioCliente;
  }

  trackByTiposIdentificacion(index: number, item: ListaBasicaPresenter<string>): string {
    return item.valor;
  }

}

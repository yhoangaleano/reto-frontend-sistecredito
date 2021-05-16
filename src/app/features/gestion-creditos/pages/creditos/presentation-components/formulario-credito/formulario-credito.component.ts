import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// NgxSpinner
import { NgxSpinnerService } from 'ngx-spinner';

// NgxToastr
import { ToastrService } from 'ngx-toastr';

// Servicios Utilidades
import { ValidarFormulariosService } from '@shared/utils';

// Componentes ViewChild
import { FormularioClienteComponent } from './../formulario-cliente/formulario-cliente.component';
import { FormularioDireccionComponent } from './../formulario-direccion/formulario-direccion.component';

@Component({
  selector: 'app-formulario-credito',
  templateUrl: './formulario-credito.component.html',
  styleUrls: ['./formulario-credito.component.scss']
})
export class FormularioCreditoComponent implements OnInit {

  @Output()
  public guardarCreditoEmitter: EventEmitter<void>;

  @Output()
  public cancelarEmitter: EventEmitter<void>;

  @ViewChild(FormularioClienteComponent, { static: true })
  formularioCliente!: FormularioClienteComponent;

  @ViewChild(FormularioDireccionComponent, { static: true })
  formularioDireccion!: FormularioDireccionComponent;

  public formularioCredito!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
    private readonly validarFormularios: ValidarFormulariosService,
  ) {
    this.guardarCreditoEmitter = new EventEmitter<void>();
    this.cancelarEmitter = new EventEmitter<void>();
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(): FormGroup {
    this.formularioCredito = this.fb.group({
      valorCredito: ['', [Validators.required]],
      numeroCuotas: ['', [Validators.required]],
      cliente: this.formularioCliente.crearFormulario(),
      ubicacion: this.formularioDireccion.crearFormulario(),
    });
    return this.formularioCredito;
  }

  guardarCredito(): void {
    this.validarFormularios.validarFormulario(this.formularioCredito);
    if (this.formularioCredito.valid) {
      this.guardarCreditoEmitter.emit();
    } else {
      this.toastr.error('everything is broken', 'Major Error', {
        timeOut: 3000,
      });
    }

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  cancelar(): void {
    this.cancelarEmitter.emit();
  }

}

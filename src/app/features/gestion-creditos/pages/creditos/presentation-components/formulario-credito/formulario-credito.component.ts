import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Módulos internos
import { VALIDATION_ERRORS_MESSAGES } from '@shared/directives';

@Component({
  selector: 'app-formulario-credito',
  templateUrl: './formulario-credito.component.html',
  styleUrls: ['./formulario-credito.component.scss']
})
export class FormularioCreditoComponent implements OnInit {

  public formularioCredito!: FormGroup;
  public mensajesErrorValidacion!: any;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.mensajesErrorValidacion = VALIDATION_ERRORS_MESSAGES;
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup {
    this.formularioCredito = this.fb.group({
      valorCredito: ['', [Validators.required, Validators.min(1)]],
      numeroCuotas: ['', [Validators.required, Validators.min(1), Validators.max(72)]],
    });
    return this.formularioCredito;
  }

}

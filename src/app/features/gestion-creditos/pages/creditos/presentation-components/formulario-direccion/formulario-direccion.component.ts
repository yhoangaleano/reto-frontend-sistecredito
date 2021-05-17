import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Módulos internos
import { VALIDATION_ERRORS_MESSAGES } from '@shared/directives';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.scss']
})
export class FormularioDireccionComponent implements OnInit {

  public formularioDireccion!: FormGroup;
  public mensajesErrorValidacion!: any;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.mensajesErrorValidacion = VALIDATION_ERRORS_MESSAGES;
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup {
    this.formularioDireccion = this.fb.group({
      direccion: ['', [Validators.required, Validators.maxLength(200)]],
      ciudad: ['', [Validators.required, Validators.maxLength(60)]],
      barrio: ['', [Validators.required, Validators.maxLength(60)]],
    });
    return this.formularioDireccion;
  }

}

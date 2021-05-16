import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-direccion',
  templateUrl: './formulario-direccion.component.html',
  styleUrls: ['./formulario-direccion.component.scss']
})
export class FormularioDireccionComponent implements OnInit {

  public formularioDireccion!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup {
    this.formularioDireccion = this.fb.group({
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
    });
    return this.formularioDireccion;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Constantes
import { TIPOS_IDENTIFICACION } from './constants';

// Modelos
import { ListaBasicaPresenter } from '@features/gestion-creditos/models';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.scss']
})
export class FormularioClienteComponent implements OnInit {

  public tiposIdentificacion: Array<ListaBasicaPresenter<string>>;

  public formularioCliente!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.tiposIdentificacion = TIPOS_IDENTIFICACION;
  }

  ngOnInit(): void {
  }

  crearFormulario(): FormGroup {
    this.formularioCliente = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
    });

    return this.formularioCliente;
  }

  trackByTiposIdentificacion(index: number, item: ListaBasicaPresenter<string>): string {
    return item.valor;
  }

}

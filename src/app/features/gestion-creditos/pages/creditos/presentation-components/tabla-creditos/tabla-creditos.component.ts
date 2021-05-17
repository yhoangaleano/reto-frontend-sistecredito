import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';

// Modelos
import { InformacionCreditoNuevo } from '@features/gestion-creditos/models/domains';

// Rxjs
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-creditos',
  templateUrl: './tabla-creditos.component.html',
  styleUrls: ['./tabla-creditos.component.scss']
})
export class TablaCreditosComponent implements OnInit, OnChanges {

  @Input()
  public informacionCreditosNuevos: Array<InformacionCreditoNuevo>;

  @Output()
  public editarInformacionCreditoNuevoEmitter: EventEmitter<InformacionCreditoNuevo>;

  public filtro: FormControl;
  public informacionCreditosNuevosFiltrado$!: Observable<Array<InformacionCreditoNuevo>>;

  constructor() {
    this.informacionCreditosNuevos = [];
    this.filtro = new FormControl('');
    this.editarInformacionCreditoNuevoEmitter = new EventEmitter<InformacionCreditoNuevo>();
  }

  ngOnInit(): void {
    this.informacionCreditosNuevosFiltrado$ = this.filtro.valueChanges.pipe(
      startWith(''),
      map(text => this.filtrarInformacionCreditosNuevos(text))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      const informacionCreditosNuevos: SimpleChange = changes.informacionCreditosNuevos;
      if (informacionCreditosNuevos.currentValue) {
        this.filtro.setValue('');
      }
    }
  }

  private filtrarInformacionCreditosNuevos(textoFiltrar: string): Array<InformacionCreditoNuevo> {
    return this.informacionCreditosNuevos.filter(informacionCreditoNuevo => {
      const terminoBusqueda = textoFiltrar.toLowerCase();
      return informacionCreditoNuevo?.cliente?.identificacion.toLowerCase().includes(terminoBusqueda)
        || informacionCreditoNuevo?.cliente?.nombres.toLowerCase().includes(terminoBusqueda)
        || informacionCreditoNuevo?.cliente?.apellidos.toLowerCase().includes(terminoBusqueda)
        || informacionCreditoNuevo?.cliente?.correo.toLowerCase().includes(terminoBusqueda);
    });
  }

  public editarInformacionCreditoNuevo(informacionCreditoNuevo: InformacionCreditoNuevo): void {
    this.editarInformacionCreditoNuevoEmitter.emit(informacionCreditoNuevo);
  }

}

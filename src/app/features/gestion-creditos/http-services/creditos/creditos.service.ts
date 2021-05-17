import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Enveroment
import { environment } from '@env';

// Modelos
import { InformacionCreditoNuevo } from '@features/gestion-creditos/models';

@Injectable()
export class CreditosService {
  private urlApi: string;

  constructor(private httpClient: HttpClient) {
    this.urlApi = `${environment.urlApi}creditos/`;
  }

  public obtenerInformacionCreditosNuevos(): Observable<Array<InformacionCreditoNuevo>> {
    return this.httpClient.get<Array<InformacionCreditoNuevo>>(`${this.urlApi}`);
  }

  public crearInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): Observable<InformacionCreditoNuevo> {
    return this.httpClient.post<InformacionCreditoNuevo>(`${this.urlApi}`, informacionCreditoNuevo);
  }

  public modificarInformacionCreditosNuevos(informacionCreditoNuevo: InformacionCreditoNuevo): Observable<InformacionCreditoNuevo> {
    return this.httpClient.put<InformacionCreditoNuevo>(`${this.urlApi}${informacionCreditoNuevo.id}`, informacionCreditoNuevo);
  }
}

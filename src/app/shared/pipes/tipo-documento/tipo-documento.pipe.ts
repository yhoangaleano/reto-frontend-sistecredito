import { Pipe, PipeTransform } from '@angular/core';

import { TIPOS_IDENTIFICACION_ABREVIATURAS, TIPOS_IDENTIFICACION_SIN_ESPECIFICAR } from './constants';

@Pipe({
  name: 'tipoDocumento'
})
export class TipoDocumentoPipe implements PipeTransform {

  transform(value: string): string {
    return TIPOS_IDENTIFICACION_ABREVIATURAS[value] || TIPOS_IDENTIFICACION_SIN_ESPECIFICAR;
  }

}

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgregarEncabezadosPeticionInterceptor } from './agregar-encabezados-peticion/agregar-encabezados-peticion.interceptor';
import { ValidarRespuestaInterceptor } from './validar-respuesta/validar-respuesta.interceptor';

export const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AgregarEncabezadosPeticionInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ValidarRespuestaInterceptor,
    multi: true
  }
];

export { AgregarEncabezadosPeticionInterceptor } from './agregar-encabezados-peticion/agregar-encabezados-peticion.interceptor';
export { ValidarRespuestaInterceptor } from './validar-respuesta/validar-respuesta.interceptor';

import { CreditoDomain } from './credito.domain';
import { ClienteDomain } from './cliente.domain';
import { UbicacionDomain } from './ubicacion.domain';

export class InformacionCreditoNuevo {
    public id!: number | null;
    public credito!: CreditoDomain;
    public cliente!: ClienteDomain;
    public ubicacion!: UbicacionDomain;
}

import { Localidad } from '../../localidades/entities/localidad.entity';

export class CreateDomicilioDto {
    readonly calle: string;
    readonly numero: number;
    readonly localidad: Localidad;
}
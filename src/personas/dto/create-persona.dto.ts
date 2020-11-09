import { CreateLibroDto } from './create-libro.dto';
import { CreateDomicilioDto } from './create-domicilio.dto';

export class CreatePersonaDto {
    readonly nombre: string;
    readonly apellido: string;
    readonly dni: number;
    readonly domicilio: CreateDomicilioDto;
    readonly libros: CreateLibroDto[];
}

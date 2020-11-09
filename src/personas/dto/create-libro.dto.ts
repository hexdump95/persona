import { Autor } from '../../autores/entities/autor.entity';

export class CreateLibroDto {
    readonly fecha: number;
    readonly genero: string;
    readonly paginas: number;
    readonly titulo: string;
    readonly autores: Autor[];
}
import { CreateAutorDto } from "../../autores/dto/create-autor.dto";
import { Domicilio } from "src/domicilios/domicilio.entity";
import { Libro } from "src/libros/libro.entity";

export class CreatePersonaDto {
    readonly nombre: string;
    readonly apellido: string;
    readonly dni: number;
    readonly domicilio: Domicilio;
    readonly libros: Libro[];
}

// class LibroDto {
//     readonly fecha: number;
//     readonly genero: string;
//     readonly paginas: number;
//     readonly titulo: string;
//     readonly autores: CreateAutorDto[];
// }

// class DomicilioDto {
//     readonly calle: string;    
//     readonly numero: number;
//     readonly localidad: LocalidadDto;
// }
// class LocalidadDto {
//     readonly denominacion: string;
// }
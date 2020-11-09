import { MaxLength, MinLength } from 'class-validator';

export class CreateAutorDto {

    @MinLength(3)
    @MaxLength(30)
    readonly nombre: string;

    @MinLength(2)
    @MaxLength(30)
    readonly apellido: string;
    
    readonly biografia: string;

}
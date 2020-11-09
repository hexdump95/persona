import { CreateLibroDto } from './create-libro.dto';
import { PartialType } from "@nestjs/swagger";

export class UpdateLibroDto extends PartialType(CreateLibroDto) { }
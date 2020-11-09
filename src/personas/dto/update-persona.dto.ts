import { CreatePersonaDto } from "./create-persona.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) { }
import { Controller } from "@nestjs/common";
import { BaseController } from "../generics/base.controller";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { Persona } from "./persona.entity";
import { PersonasService } from "./personas.service";

@Controller('api/v1/personas')
export class PersonasController extends BaseController<Persona, CreatePersonaDto, UpdatePersonaDto> {

  constructor(private personasService: PersonasService<Persona>) {
    super(personasService);
  }

}
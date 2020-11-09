import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/generics/base.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PersonaRepository } from './persona.repository';

@Injectable()
export class PersonasService<Persona> extends BaseService<Persona, CreatePersonaDto, UpdatePersonaDto> {

  constructor(@InjectRepository(PersonaRepository) private readonly personaRepository: PersonaRepository<Persona>) {
    super(personaRepository);
  }

  search(filtro: string): Promise<Persona[]> {
    return this.personaRepository.search(filtro);
  }
}

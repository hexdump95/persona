import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Persona } from './persona.entity';
import { BaseService } from '../generics/base.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonasService<Persona> extends BaseService<Persona, CreatePersonaDto, UpdatePersonaDto> {

  constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) {
    super(personaRepository);
  }

}
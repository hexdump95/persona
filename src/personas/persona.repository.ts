import { Repository, EntityRepository } from "typeorm";
import { Persona } from './persona.entity'

@EntityRepository(Persona)
export class PersonaRepository extends Repository<Persona> { }
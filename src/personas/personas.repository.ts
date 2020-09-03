import { Repository, EntityRepository } from "typeorm";
import { Persona } from './persona.entity'
import { CreatePersonaDto } from "./dto/create-persona.dto";

@EntityRepository(Persona)
export class PersonaRepository extends Repository<Persona> {
    async saveEntity(dto: CreatePersonaDto): Promise<Persona> {
        const { nombre, apellido, dni } = dto;
        const entity = new Persona(nombre, apellido, dni);
        await entity.save();
        return entity;
    }
}
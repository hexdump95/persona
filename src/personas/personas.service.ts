import { Injectable } from "@nestjs/common";
import { PersonaRepository } from "./personas.repository";
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from "./persona.entity";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { CreatePersonaDto } from "./dto/create-persona.dto";


@Injectable()
export class PersonaService {
    constructor(@InjectRepository(PersonaRepository) private personaRepository: PersonaRepository) { }

    async findAll(): Promise<Persona[]> {
        const entities = this.personaRepository.find();
        return entities;
    }

    async findById(id: number): Promise<Persona> {
        const entity = await this.personaRepository.findOne(id);
        return entity;
    }

    async saveEntity(dto: CreatePersonaDto): Promise<Persona> {
        const entity = await this.personaRepository.saveEntity(dto);
        return entity;
    }

    async update(id: number, dto: UpdatePersonaDto): Promise<Persona> {
        const find = await this.personaRepository.findOne(id);

        const { nombre, apellido, dni } = dto;

        find.nombre = nombre;
        find.apellido = apellido;
        find.dni = dni;

        await find.save();
        return find;
    }

    async delete(id: number): Promise<boolean> {
        await this.personaRepository.delete(id);
        return true;
    }

}

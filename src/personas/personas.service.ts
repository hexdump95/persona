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
        try {
            const entities = this.personaRepository.find();
            return entities;
        } catch (err) {
            console.log((<Error>err).message);
        }
    }

    async findById(id: number): Promise<Persona> {
        try {
            const entity = await this.personaRepository.findOne(id);
            return entity;
        } catch (err) {
            console.log((<Error>err).message);
        }
    }

    async create(dto: CreatePersonaDto): Promise<Persona> {
        try {
            const { nombre, apellido, dni } = dto;
            const entity = new Persona(nombre, apellido, dni);
            return await this.personaRepository.save(entity);
        } catch (err) {
            console.log((<Error>err).message);
        }
    }

    async update(id: number, dto: UpdatePersonaDto): Promise<Persona> {
        try {
            const found = await this.personaRepository.findOne(id);
            if (dto.nombre) found.nombre = dto.nombre;
            if (dto.apellido) found.apellido = dto.apellido;
            if (dto.dni) found.dni = dto.dni;
            await this.personaRepository.update(id, found);
            const updated = await this.personaRepository.findOne(id);
            return updated;
        } catch (err) {
            console.log((<Error>err).message);
        }
    }

    async remove(id: number): Promise<boolean> {
        try {
            await this.personaRepository.delete(id);
            return true;
        } catch (err) {
            console.log((<Error>err).message);
        }
    }

}

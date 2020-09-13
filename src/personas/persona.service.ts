import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PersonaRepository } from "./persona.repository";
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from "./persona.entity";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { CreatePersonaDto } from "./dto/create-persona.dto";

@Injectable()
export class PersonaService {
    constructor(@InjectRepository(PersonaRepository) private personaRepository: PersonaRepository) { }

    async findAll(): Promise<Persona[]> {
        const entities = this.personaRepository.find();
        if (entities) return entities;
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }

    async findById(id: number): Promise<Persona> {
        const entity = await this.personaRepository.findOne(id);
        if (entity) return entity;
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }

    async create(dto: CreatePersonaDto): Promise<Persona> {
        try {
            const { nombre, apellido, dni } = dto;
            const entity = new Persona(nombre, apellido, dni);
            return await this.personaRepository.save(entity);
        } catch (err) {
            console.log((<Error>err).message);
            throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.BAD_REQUEST);
        }
    }

    async update(id: number, dto: UpdatePersonaDto): Promise<Persona> {
        try {
            const entity = await this.personaRepository.findOne(id);
            if (entity) {
                if (dto.nombre) entity.nombre = dto.nombre;
                if (dto.apellido) entity.apellido = dto.apellido;
                if (dto.dni) entity.dni = dto.dni;
                await this.personaRepository.update(id, entity);
                const updated = await this.personaRepository.findOne(id);
                return updated;
            }
        } catch (err) {
            console.log((<Error>err).message);
            throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
        }
    }

    async remove(id: number): Promise<boolean> {
        const entity = await this.personaRepository.findOne(id);
        if (entity) {
            await this.personaRepository.delete(id);
            return true;
        }
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }
}

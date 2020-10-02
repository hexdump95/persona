import { BaseRepository } from "../generics/base.repository";
import { EntityRepository } from "typeorm";
import { Persona } from './persona.entity'
import { HttpException, HttpStatus } from "@nestjs/common";

@EntityRepository(Persona)
export class PersonaRepository<Persona> extends BaseRepository<Persona> {

    async search(filtro: string): Promise<Persona[]> {
        try {
            return await this.createQueryBuilder('persona')
                .where(`persona.nombre LIKE '%${filtro}%' OR persona.apellido LIKE '%${filtro}%'`)
                .getMany();
        } catch (err) {
            throw new HttpException((<Error>err).message, HttpStatus.BAD_REQUEST);
        }
    }

}

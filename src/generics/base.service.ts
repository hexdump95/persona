import { HttpException, HttpStatus } from "@nestjs/common";
import { classToClass } from "class-transformer";
import { Repository } from "typeorm";

export class BaseService<Entity, CreateDto, UpdateDto> {

    constructor(private repository: Repository<Entity>) { }
    
    async findAll(): Promise<Entity[]> {
        const entities = this.repository.find();
        if (entities) return entities;
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }

    async findById(id: number): Promise<Entity> {
        const entity = await this.repository.findOne(id);
        if (entity) return entity;
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }

    async create(dto: CreateDto): Promise<Entity> {
        try {
            const entity = classToClass(dto);
            return await this.repository.save(entity);
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                console.log((<Error>err).message);
                throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.BAD_REQUEST);
            }
            else
                console.log(err.code);
        }
    }

    async update(id: number, dto: UpdateDto): Promise<Entity> {
        try {
            const entity = await this.repository.findOne(id);
            if (entity) {
                Object.assign(entity, dto);
                await this.repository.update(id, entity);
                return await this.repository.findOne(id);
            }
            else throw new Error();
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                console.log((<Error>err).message);
                throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.BAD_REQUEST);
            }
            else {
                throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
            }
        }
    }

    async remove(id: number): Promise<boolean> {
        const entity = await this.repository.findOne(id);
        if (entity) {
            await this.repository.delete(id);
            return true;
        }
        else throw new HttpException({ error: 'Error, por favor intente más tarde.' }, HttpStatus.NOT_FOUND);
    }
}
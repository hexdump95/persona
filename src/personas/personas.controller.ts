import { Controller, Get, Post, Delete, Put, Param, Body, Res, HttpStatus } from "@nestjs/common";
import { PersonaService } from './personas.service';
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { Response } from 'express';

@Controller('api/v1/personas')
export class PersonaController {
    constructor(private personaService: PersonaService) { }

    @Get('')
    async findAll(@Res() res: Response): Promise<Response> {
        const findall = await this.personaService.findAll();
        if (findall) return res.status(HttpStatus.OK).json(findall);
        else return res.status(HttpStatus.NOT_FOUND).json({ error: 'Error, por favor intente más tarde.' });
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: number): Promise<Response> {
        const findbyid = await this.personaService.findById(id);
        if (findbyid) return res.status(HttpStatus.OK).json(findbyid);
        else return res.status(HttpStatus.NOT_FOUND).json({ error: 'Error, por favor intente más tarde.' });
    }

    @Post('')
    async create(@Res() res: Response, @Body() dto: CreatePersonaDto): Promise<Response> {
        const created = await this.personaService.create(dto);
        if (created) return res.status(HttpStatus.OK).json(created);
        else return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Error, por favor intente más tarde.' });
    }

    @Put(':id')
    async update(@Res() res: Response, @Param('id') id: number, @Body() dto: UpdatePersonaDto): Promise<Response> {
        const findbyid = await this.personaService.findById(id);
        if (!findbyid) return res.status(HttpStatus.NOT_FOUND).json({ error: 'Error, por favor intente más tarde.' });
        const updated = await this.personaService.update(id, dto);
        return res.status(HttpStatus.OK).json(updated);

    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: number): Promise<Response> {
        const findbyid = await this.personaService.findById(id);
        if (!findbyid) return res.status(HttpStatus.NOT_FOUND).json({ error: 'Error, por favor intente más tarde.' });
        const removed = await this.personaService.remove(id);
        return res.status(HttpStatus.NO_CONTENT).json(removed);
    }
}

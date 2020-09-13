import { Controller, Get, Post, Delete, Put, Param, Body, Res, HttpStatus } from "@nestjs/common";
import { PersonaService } from './persona.service';
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { Response } from 'express';

@Controller('api/v1/personas')
export class PersonaController {

    constructor(private personaService: PersonaService) { }

    @Get('')
    async findAll(@Res() res: Response): Promise<Response> {
        return res.status(HttpStatus.OK).json(await this.personaService.findAll());
    }

    @Get(':id')
    async findOne(@Res() res: Response, @Param('id') id: number): Promise<Response> {
        return res.status(HttpStatus.OK).json(await this.personaService.findById(id));
    }

    @Post('')
    async create(@Res() res: Response, @Body() dto: CreatePersonaDto): Promise<Response> {
        return res.status(HttpStatus.OK).json(await this.personaService.create(dto));
    }

    @Put(':id')
    async update(@Res() res: Response, @Param('id') id: number, @Body() dto: UpdatePersonaDto): Promise<Response> {
        return res.status(HttpStatus.OK).json(await this.personaService.update(id, dto));
    }

    @Delete(':id')
    async delete(@Res() res: Response, @Param('id') id: number): Promise<Response> {
        return res.status(HttpStatus.NO_CONTENT).json(await this.personaService.remove(id));
    }
}

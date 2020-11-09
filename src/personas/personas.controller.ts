import { Query } from '@nestjs/common';
import { PaginationQueryDto } from './../common/dto/pagination-query.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { PersonasService } from './personas.service';

@Controller('api/v1/personas')
export class PersonasController {

    constructor(private readonly personasService: PersonasService<Persona>) {
    }
  
    @Get('/search')
    async search(@Query('filtro') filtro: string): Promise<Persona[]> {
      return await this.personasService.search(filtro);
    }
  
    @Get('')
    findAll(@Query() paginationQuery: PaginationQueryDto): Promise<Persona[]> {
        return this.personasService.findAll(paginationQuery);
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Persona> {
        return this.personasService.findOne(+id);
    }

    @Post('')
    create(@Body() dto: CreatePersonaDto): Promise<Persona> {
        return this.personasService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdatePersonaDto): Promise<Persona> {
        return this.personasService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<boolean> {
        return this.personasService.remove(+id);
    }
}

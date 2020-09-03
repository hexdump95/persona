import { Controller, Get, Post, Delete, Put, Param, Body } from "@nestjs/common";
import { PersonaService } from './personas.service';
import { Persona } from './persona.entity';
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { CreatePersonaDto } from "./dto/create-persona.dto";


@Controller('api/v1/personas')
export class PersonaController {
    constructor(private personaService: PersonaService) { }

    @Get('')
    findAll(): Promise<Persona[]> {
        return this.personaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Persona> {
        return this.personaService.findById(id);
    }

    @Post('')
    create(@Body() dto: CreatePersonaDto): Promise<Persona> {
        return this.personaService.saveEntity(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdatePersonaDto): Promise<Persona> {
        return this.personaService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        return this.personaService.delete(id);
    }
}

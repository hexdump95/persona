import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreatePersonaDto } from "./dto/create-persona.dto";
import { UpdatePersonaDto } from "./dto/update-persona.dto";
import { Persona } from "./persona.entity";
import { PersonasService } from "./personas.service";

@Controller('api/v1/personas')
export class PersonasController {

  constructor(private readonly personasService: PersonasService<Persona>) {
  }

  @Get('/search')
  async search(@Query('filtro') filtro: string): Promise<Persona[]> {
    return await this.personasService.search(filtro);
  }

  @Get('')
  getAll(): Promise<Persona[]> {
    return this.personasService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Persona> {
    return this.personasService.findById(id);
  }

  @Post('')
  save(@Body() dto: CreatePersonaDto): Promise<Persona> {
    return this.personasService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePersonaDto): Promise<Persona> {
    return this.personasService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<boolean> {
    return this.personasService.remove(id);
  }
  
}
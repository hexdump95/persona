import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './autor.entity';
import { AutoresService } from './autores.service';

@Controller('api/v1/autores')
export class AutoresController {

    constructor(private readonly autoresService: AutoresService<Autor>) {
    }

    @Get('')
    getAll(): Promise<Autor[]> {
        return this.autoresService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Autor> {
        return this.autoresService.findById(id);
    }

    @Post('')
    save(@Body() dto: CreateAutorDto): Promise<Autor> {
        return this.autoresService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdateAutorDto): Promise<Autor> {
        return this.autoresService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        return this.autoresService.remove(id);
    }
}

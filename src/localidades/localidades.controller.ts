import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Localidad } from './localidad.entity';
import { LocalidadesService } from './localidades.service';

@Controller('api/v1/localidades')
export class LocalidadesController {

    constructor(private readonly localidadesService: LocalidadesService<Localidad>) {
    }

    @Get('')
    getAll(): Promise<Localidad[]> {
        return this.localidadesService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<Localidad> {
        return this.localidadesService.findById(id);
    }

    @Post('')
    save(@Body() dto: CreateLocalidadDto): Promise<Localidad> {
        return this.localidadesService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdateLocalidadDto): Promise<Localidad> {
        return this.localidadesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        return this.localidadesService.remove(id);
    }
}

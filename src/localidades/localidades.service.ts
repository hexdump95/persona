import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/generics/base.service';
import { Repository } from 'typeorm';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Localidad } from './localidad.entity';

@Injectable()
export class LocalidadesService<Localidad> extends BaseService<Localidad, CreateLocalidadDto, UpdateLocalidadDto> {

    constructor(@InjectRepository(Localidad) private readonly localidadRepository: Repository<Localidad>) {
        super(localidadRepository);
    }
}

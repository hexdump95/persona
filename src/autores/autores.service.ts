import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../common/generics/base.service';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutoresService<Autor> extends BaseService<Autor, CreateAutorDto, UpdateAutorDto> {

    constructor(@InjectRepository(Autor)
    private readonly autorRepository: Repository<Autor>
    ) {
        super(autorRepository);
    }
}

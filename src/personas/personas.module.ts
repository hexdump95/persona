import { PersonaRepository } from './persona.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Domicilio } from './entities/domicilio.entity';
import { Libro } from './entities/libro.entity';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaRepository, Libro, Domicilio])],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule { }

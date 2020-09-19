import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaRepository } from './persona.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaRepository])],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule { }

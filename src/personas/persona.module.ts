import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaRepository } from './persona.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaRepository])],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule { }

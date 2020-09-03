import { Module } from '@nestjs/common';
import { PersonaController } from './personas.controller';
import { PersonaService } from './personas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaRepository } from './personas.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaRepository])],
  controllers: [PersonaController],
  providers: [PersonaService]
})
export class PersonaModule { }

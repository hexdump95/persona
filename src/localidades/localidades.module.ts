import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Localidad } from './entities/localidad.entity';
import { LocalidadesController } from './localidades.controller';
import { LocalidadesService } from './localidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Localidad])],
  controllers: [LocalidadesController],
  providers: [LocalidadesService]
})
export class LocalidadesModule { }

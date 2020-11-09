import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Autor } from './entities/autor.entity';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  controllers: [AutoresController],
  providers: [AutoresService]
})
export class AutoresModule { }

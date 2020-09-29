import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Domicilio } from './domicilio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Domicilio])]
})
export class DomiciliosModule { }

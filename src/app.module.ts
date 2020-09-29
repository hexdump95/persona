import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module'
import { AutoresModule } from './autores/autores.module';
import { LibrosModule } from './libros/libros.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { DomiciliosModule } from './domicilios/domicilios.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [__dirname + '/./**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    AutoresModule,
    DomiciliosModule,
    LibrosModule,
    LocalidadesModule,
    PersonasModule
  ]
})
export class AppModule { }

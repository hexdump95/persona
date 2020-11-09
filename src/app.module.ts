import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoresModule } from './autores/autores.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { PersonasModule } from './personas/personas.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_persona',
      entities: [__dirname + '/./**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    AutoresModule,
    LocalidadesModule,
    PersonasModule
  ]
})
export class AppModule { }

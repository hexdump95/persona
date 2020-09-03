import { Module } from '@nestjs/common';
import { PersonaModule } from './personas/personas.module'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_persona',
      entities: [__dirname + '/./**/*.entity.js'],
      synchronize: true,
    })
  ]
})
export class AppModule { }

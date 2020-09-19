import { Module } from '@nestjs/common';
import { PersonasModule } from './personas/personas.module'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_persona',
      entities: [__dirname + '/./**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ]
})
export class AppModule { }

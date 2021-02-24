import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './patient/entities/patient.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "shsbsy70",
    "database": "hcv19",
    "synchronize": true,
    "logging": false,
    "entities":[Patient],
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}

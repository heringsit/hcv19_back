import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './patient/entities/patient.entity'
import { PatientController } from './patient/patient.controller';
import { PatientModule } from './patient/patient.module';
import { PatientService } from './patient/patient.service';

@Module({
  imports: [
  TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "hcvadmin",
    "password": "herings2015",
    "database": "hcv19",
    "synchronize": true,
    "logging": false,
    "entities":[Patient],
  }), PatientModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentDetailRepository, IncidentMasterRepository } from 'src/repos/incident.repository';
import { UsersRepository } from 'src/repos/user.repository';
import { IncidentDetail, IncidentDetailSchema, IncidentMaster, IncidentMasterSchema } from 'src/schema/incident.schema';
import { UserModel } from 'src/users/model/user.model';
import { UsersService } from 'src/users/service/users.service';
import { UsersModule } from 'src/users/users.module';
import { IncidentsController } from './controller/incidents.controller';
import { IncidentsService } from './service/incidents.service';

@Module({
  imports: [
      UsersModule,
      MongooseModule.forFeature([{ name: IncidentMaster.name, schema: IncidentMasterSchema }]),
      MongooseModule.forFeature([{ name: IncidentDetail.name, schema: IncidentDetailSchema }]),
    ],
  controllers: [IncidentsController],
  providers: [UserModel, UsersRepository, UsersService, IncidentsService, IncidentMasterRepository, IncidentDetailRepository]
})
export class IncidentsModule {}

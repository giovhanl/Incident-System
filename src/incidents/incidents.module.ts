import { Module } from '@nestjs/common';
//import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
//import { RolesGuard } from 'src/helpers/roles/roles.guard';
import {
  IncidentDetailRepository,
  IncidentMasterRepository,
} from 'src/repos/incident.repository';

import {
  IncidentDetail,
  IncidentDetailSchema,
  IncidentMaster,
  IncidentMasterSchema,
} from 'src/schema/incident.schema';

import { UsersModule } from 'src/users/users.module';
import { IncidentsController } from './controller/incidents.controller';
import { IncidentsService } from './service/incidents.service';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: IncidentMaster.name, schema: IncidentMasterSchema },
    ]),
    MongooseModule.forFeature([
      { name: IncidentDetail.name, schema: IncidentDetailSchema },
    ]),
  ],
  controllers: [IncidentsController],
  providers: [
    IncidentsService,
    IncidentMasterRepository,
    IncidentDetailRepository,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard
    // }
  ],
})
export class IncidentsModule {}

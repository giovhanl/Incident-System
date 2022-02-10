import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { IncidentsController } from './controller/incidents.controller';
import { IncidentsService } from './service/incidents.service';

@Module({
  imports: [UsersModule],
  controllers: [IncidentsController],
  providers: [IncidentsService]
})
export class IncidentsModule {}

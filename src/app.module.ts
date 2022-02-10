import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentsModule } from './incidents/incidents.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/IncidentSystem',
    ),
    IncidentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

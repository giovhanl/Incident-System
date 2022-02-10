import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from 'src/repos/user.repository';
import { User, UserSchema } from 'src/schema/user.schema';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
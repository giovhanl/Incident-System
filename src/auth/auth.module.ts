import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersRepository } from 'src/repos/user.repository';
import { UserDto } from 'src/users/model/user.model';
import { UsersService } from 'src/users/service/users.service';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}

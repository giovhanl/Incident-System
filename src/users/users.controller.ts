import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): any {
    return this.usersService.getAll();
  }

  @Get(':id')
  getUserbyId(@Param('id') id: string): any {
    return this.usersService.getUserByID(Number(id));
  }
}

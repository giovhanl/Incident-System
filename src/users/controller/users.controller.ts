import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { UserModel } from '../model/user.model';
import { UsersService } from '../service/users.service';

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

  @ApiCreatedResponse({ type: UserModel })
  @Post('add')
  addUser(@Body() body: UserModel): any {
    return this.usersService.addUser(body);
  }

  @ApiCreatedResponse({ type: UserModel })
  @Post('update')
  updateUser(@Body() body: UserModel): any {
    return this.usersService.update(body.userId, body);
  }
}
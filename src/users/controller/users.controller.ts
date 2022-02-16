import { Body, Controller, Get, Post, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../model/user.model';
import { UsersService } from '../service/users.service';
@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiCreatedResponse({ type: UserDto })
  @Get()
  getAll(): any {
    return this.usersService.getAll();
  }

  @Get(':id')
  getUserbyId(@Param('id') id: string): any {
    return this.usersService.getUserByID(id);
  }

  @ApiCreatedResponse({ type: UserDto })
  @UsePipes(new ValidationPipe())
  @Post('add')
  addUser(@Body() body: UserDto): any {
    return this.usersService.addUser(body);
  }

  @ApiCreatedResponse({ type: UserDto })
  @Post('update')
  updateUser(@Body() body: UserDto): any {
    return this.usersService.update(body.userId, body);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDefined()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDefined()
  @IsEmail()
  username: string;

  @ApiProperty()
  userRole: Array<string>;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  username: string;
  @ApiProperty()
  password: string;
}

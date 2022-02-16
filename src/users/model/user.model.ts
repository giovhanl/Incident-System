import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  id: number;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  userRole: string;
  @ApiProperty()
  password: string;
}

export class LoginDto
{
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
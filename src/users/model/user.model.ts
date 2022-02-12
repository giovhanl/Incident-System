import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  id: number;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  userRole: string;
  @ApiProperty()
  password: string;
}

export class LoginDto
{
  @ApiProperty()
  userName: string;
  @ApiProperty()
  password: string;
}
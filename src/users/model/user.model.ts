import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

@Injectable()
export class UserModel {
  id: number;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  userName: string;
  @ApiProperty()
  userRole: string;
  password: string;
}

import { Injectable } from "@nestjs/common";

@Injectable()
export class UserModel {
  id: number;
  userId: string;
  userName: string;
  userRole: string;
  password: string;
}

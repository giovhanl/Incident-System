import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  userName: string;

  @Prop()
  userRole: string;
  cmd;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
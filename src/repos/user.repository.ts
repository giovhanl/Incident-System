import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/repos/entity.repository';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UsersRepository extends EntityRepository<UserDocument> {
  constructor(@InjectModel(User.name) userm: Model<UserDocument>) {
    super(userm);
  }
}

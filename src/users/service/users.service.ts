import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repos/user.repository';
import { User } from 'src/schema/user.schema';
import { UserModel } from '../model/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}


  getAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  getUserByID(id: number): Promise<User> {
    return this.usersRepository.findById(id);
  }

  addUser(userModel: UserModel): Promise<User> {
    return this.usersRepository.create({
      userId: userModel.userId,
      userName: userModel.userName,
      password: userModel.password,
      userRole: 'Admin',
  });
  }

  async update(userId: string, userUpdates: UserModel): Promise<User> {
    return this.usersRepository.update({ userId }, userUpdates);
  }
}
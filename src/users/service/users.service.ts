import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repos/user.repository';
import { User } from 'src/schema/user.schema';
import { UserDto } from '../model/user.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async getUserByID(id: string): Promise<User> {
    return await this.usersRepository.findOne({ _id: id });
  }

  async getUserByUserID(id: string): Promise<User> {
    return await this.usersRepository.findOne({ userId: id });
  }

  async getUserByName(username: string): Promise<User> {
    return await this.usersRepository.findOne({ username: username });
  }

  async addUser(userModel: UserDto): Promise<User> | null {
    const user = await this.getUserByName(userModel.username);
    if (user) {
      throw new BadRequestException('user already exist');
    }
    return this.usersRepository.create({
      userId: userModel.userId,
      username: userModel.username,
      password: userModel.password,
      userRole: userModel.userRole,
    });
  }

  async update(userId: string, userUpdates: UserDto): Promise<User> {
    return this.usersRepository.update({ userId }, userUpdates);
  }

  async addRole(username: string, roles: []): Promise<User> {
    return this.usersRepository.update({ username }, { UserRole: roles });
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    { id: 0, name: 'Gio', role: 'Admin' },
    { id: 1, name: 'Vahn', role: 'Dev'},
  ];

  getAll() {
    return this.users;
  }

  getUserByID(id: number) {
    return this.users.find((user) => user.id == id);
  }

  addUser(name: string, role: string) {
    var count = this.users.lenght;
    return this.users.push({id: count, name: name, role: role});
  }
import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

// In this case it takes the part as a DataBase
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Bogomil',
      password: 'dai5Leva',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'Eto5Leva',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
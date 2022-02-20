import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../service/users.service';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  const mock_UserService = {
    addUser: jest.fn((dto) => {
      return {
        id: Date.now().toString(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mock_UserService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add new user', () => {
    expect(
      controller.addUser({
        username: 'gio@gmail.com',
        password: '1233',
        userRole: ['User'],
      }),
    ).toEqual({
      id: expect.any(String),
      username: 'gio@gmail.com',
      userId: 'gio@gmail.com',
      password: '1233',
      userRole: ['User'],
    });

    expect(mock_UserService.addUser).toHaveBeenCalled();
  });
});

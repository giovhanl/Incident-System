import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(service.getAll()).toContain({ id: 0, name: 'Gio' });
  });

  it('should be defined', () => {
    expect(service.getUserByID(0)).toStrictEqual([{"id": 0, "name": "Gio"}]);
  });
});
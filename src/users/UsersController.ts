// users/users.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './UsersService';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}

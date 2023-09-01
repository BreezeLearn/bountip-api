import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userData: Partial<User>): Promise<User> {
    const roleId = 2;
    return this.userService.createUser(userData, roleId);
  }
  // Add other CRUD routes as needed
}

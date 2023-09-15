import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger'; 
import { CreateUserDto } from './dto/create-user.dto'; 

@Controller('user')
@ApiTags('User') 
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const roleId = 2;
    return this.userService.createUser(createUserDto, roleId);
  }
  
}

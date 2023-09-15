import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: Partial<User>, roleId: number): Promise<User> {
    
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      throw new BadRequestException('FirstName & LastName required! Cannot be empty');
    }

    const user = this.userRepository.create(userData);

    user.roleId = roleId;

    user.phoneNumber = userData.phoneNumber;

    return this.userRepository.save(user);
  }

  
}

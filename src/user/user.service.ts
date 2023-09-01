import { Injectable } from '@nestjs/common';
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
    // Create a new user instance
    const user = this.userRepository.create(userData);
  
    // Assign the specified roleId to the new user
    user.roleId = roleId;

    user.phoneNumber = userData.phoneNumber;
  
    // Save the user to the database
    return this.userRepository.save(user);
  }
  

  // Implement other CRUD methods here if needed
}



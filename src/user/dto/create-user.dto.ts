import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsString()
  @ApiProperty()
  last_name: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @IsString()
  @ApiProperty()
  businessName: string;

  @IsString()
  @ApiProperty()
  numberOfLocations: number;

  @IsString()
  @ApiProperty()
  createdAt: Date;
}

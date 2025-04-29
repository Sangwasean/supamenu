// src/users/users.service.ts
import {
    ConflictException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
  import { Repository } from 'typeorm';
  import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
  
  @Injectable()
  export class UserService {
    constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
    ) {}
  
    async create(createUserDto: CreateUserDto): Promise<User> {
      try {
        const user = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(user);
      } catch (error) {
        if (error.code === '23505') {
          throw new ConflictException('Email already exists');
        }
        throw error;
      }
    }
  
    async findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
  
    async findOne(id: number): Promise<User> {
      const user = await this.usersRepository.findOneBy({ id });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    }
  
    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
      const user = await this.findOne(id);
      
      try {
        this.usersRepository.merge(user, updateUserDto);
        return await this.usersRepository.save(user);
      } catch (error) {
        if (error.code === '23505') {
          throw new ConflictException('Email already exists');
        }
        throw error;
      }
    }
  
    async remove(id: number): Promise<void> {
      const user = await this.findOne(id);
      await this.usersRepository.remove(user);
    }
  
    async findByEmail(email: string): Promise<User | undefined> {
      return (await this.usersRepository.findOneBy({ email })) || undefined;
    }
  }
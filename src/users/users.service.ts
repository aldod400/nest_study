import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }
    
    async getAll() {
        return await this.userRepository.find();
    }
    
    async getById(id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    async create(user: CreateUserDto) {
        return await this.userRepository.save(user);
    }
}
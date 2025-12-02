import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @Get()
    findAll() {
        return this.usersService.getAll();
    }

    @Get(':id')
    show(@Param('id') id: number) {
        return this.usersService.getById(id);
    }

    @Post('/create')
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user);
    }
}

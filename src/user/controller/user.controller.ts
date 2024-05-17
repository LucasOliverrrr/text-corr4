
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
  import { UserService } from '../service/user.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard.strategy';
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<any[]> {
      return this.userService.findAll();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<any> {
      return this.userService.findOne(id);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<any> {
      return this.userService.create(createUserDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
      @Param('id') id: number,
      @Body() updateUserDto: UpdateUserDto,
    ): Promise<any> {
      return this.userService.update(id, updateUserDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
      return this.userService.delete(id);
    }
  }
  
  

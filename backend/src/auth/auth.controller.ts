// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './localAuth.guard';
import { LoginUserDto } from './loginUser.dto';
import { CreateUserDto } from './createUser.dto';
import { User } from 'src/user/user.entity';
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: LoginUserDto })
  async login(@Req() req: { user: User }) {
    
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<Omit<User, 'password' | 'hashPassword'>> {
    const user = await this.authService.register(createUserDto);
    const { password, ...result } = user;
    return result;
  }
}

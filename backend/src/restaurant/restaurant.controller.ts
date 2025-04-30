import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UserService } from 'src/user/user.service';
import { RequestWithUser } from 'src/auth/interfaces/requestWithUser.interface';

@ApiTags('Restaurant')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('restaurant')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly userservice: UserService,
  ) {}

  @Post()
  async create(
    @Body() createRestaurantDto: CreateRestaurantDto,
    @Req() req: RequestWithUser,
  ) {
    const user = await this.userservice.findOne(req.user.userId);
    return this.restaurantService.create(createRestaurantDto, user);
  }

  @Get()
  findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }
}

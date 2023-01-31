import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BraspressService } from './braspress.service';
import { CreateBraspressDto } from './dto/create-braspress.dto';


@Controller('braspress')
export class BraspressController {
  constructor(private readonly braspressService: BraspressService) {}

  @Post('/reversePickup/quotaion')
  createQuotation(@Body() createBraspressDto: CreateBraspressDto) {
    return this.braspressService.createQuotation(createBraspressDto);
  }

  @Get('/reversePickup/byNf/:id')
  async getOrderByNf(@Param('id') id: string) {
    return await this.braspressService.getOrderByNf(+id);
  }

  @Get('reversePickup/byNum/:id')
  async getOrderByNum(@Param('id') id: string) {
    return await this.braspressService.getOrderByNum(+id);
  }
}

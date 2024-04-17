import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TimeDataService } from './time-data.service';
import { PaginationDto } from './pagination.dto';

@Controller('time-data')
export class TimeDataController {
  constructor(private readonly timeDataService: TimeDataService) {}

  @Post()
  async create(@Body('seconds') seconds: number): Promise<void> {
    await this.timeDataService.create(seconds);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.timeDataService.findAll(paginationDto);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { TimeDataService } from './time-data.service';

@Controller('time-data')
export class TimeDataController {
  constructor(private readonly timeDataService: TimeDataService) {}

  @Post()
  async create(@Body('seconds') seconds: number): Promise<void> {
    await this.timeDataService.create(seconds);
  }
}

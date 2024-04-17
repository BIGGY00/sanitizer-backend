import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TimeData } from './time-data.entity';
import { PaginationDto } from './pagination.dto';

@Injectable()
export class TimeDataService {
  constructor(
    @InjectModel(TimeData)
    private readonly timeDataModel: typeof TimeData,
  ) {}

  async create(seconds: number): Promise<TimeData> {
    const currentDate = new Date();
    return this.timeDataModel.create({ seconds, date: currentDate });
  }

  async findAll(
    paginationDto: PaginationDto,
  ): Promise<{ data: TimeData[]; count: number }> {
    const { page = 1, limit = 10 } = paginationDto;
    const offset = (page - 1) * limit;
    const data = await this.timeDataModel.findAll({
      limit,
      offset,
    });
    const count = await this.timeDataModel.count();
    return { data, count };
  }
}

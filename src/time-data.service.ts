import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TimeData } from './time-data.entity';

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
}

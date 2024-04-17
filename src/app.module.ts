import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TimeDataController } from './time-data.controller';
import { TimeDataService } from './time-data.service';
import { TimeData } from './time-data.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      autoLoadModels: true,
      synchronize: true,
      dialect: 'mysql',
      // host: 'beq27rz7vtawmraurapk-mysql.services.clever-cloud.com',
      // port: 3306,
      // username: 'uxzdajq5sdrurhbb',
      // password: 'YYWZrOSD1cy8e4jYVqHi',
      // database: 'beq27rz7vtawmraurapk',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'Sanitizer_db',
    }),
    SequelizeModule.forFeature([TimeData]),
  ],
  controllers: [TimeDataController],
  providers: [TimeDataService],
})
export class AppModule {}

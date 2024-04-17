import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class TimeData extends Model<TimeData> {
  @Column
  seconds: number;

  @Column
  date: Date;
}

import { IsNumber, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  readonly page: number;

  @IsOptional()
  @IsNumber()
  readonly limit: number;
}

import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsNumber()
  publicationYear: number;
}

export class UpdateBookDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  author: string;

  @IsNumber()
  @IsOptional()
  publicationYear: number;
}

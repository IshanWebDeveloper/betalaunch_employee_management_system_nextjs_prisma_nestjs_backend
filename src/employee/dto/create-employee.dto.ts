// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsDecimal,
  IsNumber,
} from 'class-validator';
import { employee_type, gender, Prisma } from '@prisma/client';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(70)
  FullName: string;

  @IsString()
  @MaxLength(35)
  @ApiProperty({ required: true })
  Name_With_Initials: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  DisplayName: string;

  @IsOptional()
  @MaxLength(70)
  @ApiProperty({ required: false })
  Designation: string | null;

  @IsOptional()
  @ApiProperty({ required: false })
  Gender: gender | null;

  @IsOptional()
  @ApiProperty({ required: false })
  Date_of_Birth: Date | null;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsEmail()
  @MaxLength(254)
  Email: string | null;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsMobilePhone()
  @MaxLength(15)
  Mobile_Number: string | null;

  @IsOptional()
  @ApiProperty({ required: false })
  @IsDate()
  Joined_Date: Date | null;

  @IsOptional()
  @IsDecimal()
  @ApiProperty({ required: false })
  Salary: Prisma.Decimal | null;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  Experience: number | null;

  @IsOptional()
  @ApiProperty({ required: false })
  Personal_Notes: string | null;

  @IsOptional()
  @ApiProperty({ required: false })
  Employee_Type: employee_type | null;
}

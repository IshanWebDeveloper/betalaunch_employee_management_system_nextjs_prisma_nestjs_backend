import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateArticleDto extends PartialType(CreateEmployeeDto) {}

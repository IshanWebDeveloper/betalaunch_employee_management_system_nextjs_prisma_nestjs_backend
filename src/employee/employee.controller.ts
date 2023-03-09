import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeEntity } from './entities/employee.entity';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employees')
@ApiTags('employees')
@UseFilters(PrismaClientExceptionFilter)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiCreatedResponse({ type: EmployeeEntity })
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  @ApiCreatedResponse({ type: EmployeeEntity, isArray: true })
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }
}
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employees.create({ data: createEmployeeDto });
  }

  getAllEmployees() {
    return this.prisma.employees.findMany();
  }
}

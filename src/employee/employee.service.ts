import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  createEmployee(createEmployeeDto: CreateEmployeeDto) {
    return this.prisma.employees.create({ data: createEmployeeDto });
  }

  async getAllEmployees() {
    const employeeData = await this.prisma.employees.findMany();
    const distinctEmpTypes = await this.prisma.employees.findMany({
      select: {
        Employee_Type: true,
      },
      distinct: ['Employee_Type'],
    });
    return {
      employeeData: [...employeeData],
      distinctEmpTypes: [...distinctEmpTypes],
    };
  }

  getDistinctEmpTypes() {
    return this.prisma.employees.findMany({
      select: {
        Employee_Type: true,
      },
      distinct: ['Employee_Type'],
    });
  }

  getEmployeesByType(emType: any) {
    return this.prisma.employees.findMany({
      where: {
        Employee_Type: emType,
      },
    });
  }
  updateByEmployeeId(id: number, updateEmployee: UpdateEmployeeDto) {
    return this.prisma.employees.update({
      where: { EmployeeID: id },
      data: updateEmployee,
    });
  }
  deleteEmployee(id: number) {
    return this.prisma.employees.delete({
      where: {
        EmployeeID: id,
      },
    });
  }

  getOneEmpByID(id: number) {
    return this.prisma.employees.findUnique({
      where: {
        EmployeeID: id,
      },
    });
  }
}

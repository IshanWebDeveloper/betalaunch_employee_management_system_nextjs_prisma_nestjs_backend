import { Employees, employee_type, gender } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime';

export class EmployeeEntity implements Employees {
  @ApiProperty()
  EmployeeID: number;
  @ApiProperty()
  FullName: string;
  @ApiProperty()
  Name_With_Initials: string;
  @ApiProperty()
  DisplayName: string;
  @ApiProperty({ required: false, nullable: true })
  Designation: string | null;
  @ApiProperty({ required: false, nullable: true })
  Gender: gender | null;
  @ApiProperty({ required: false, nullable: true })
  Date_of_Birth: Date;
  @ApiProperty({ required: false, nullable: true })
  Joined_Date: Date;
  @ApiProperty({ required: false, nullable: true })
  Salary: Decimal;
  @ApiProperty({ required: false, nullable: true })
  Experience: number;
  @ApiProperty({ required: false, nullable: true })
  Employee_Type: employee_type;
  @ApiProperty({ required: false, nullable: true })
  Email: string;
  @ApiProperty({ required: false, nullable: true })
  Mobile_Number: string;
  @ApiProperty({ required: false, nullable: true })
  Personal_Notes: string;
}

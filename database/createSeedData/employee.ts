import { Employees } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const employees: Partial<Employees>[] = [
  {
    FullName: 'Corey Curtis',
    Name_With_Initials: 'C. Curtis',
    DisplayName: 'Corey Curtis',
    // EmployeeID: 1,
    Designation: 'Senior Developer',
    Employee_Type: 'Full_Time',
    Experience: 2,
  },
  {
    FullName: 'Alfonso Stanton',
    Name_With_Initials: 'A. Stanton ',
    DisplayName: 'Alfonso Stanton',
    // EmployeeID: 2,
    Designation: 'Senior Front-End Developer',
    Employee_Type: 'Part_Time',
    Experience: 3,
  },
  {
    FullName: 'Justin Aminoff',
    Name_With_Initials: 'J. Aminoff',
    DisplayName: 'Justin Aminoff',
    // EmployeeID: 3,
    Designation: 'Senior Developer',
    Employee_Type: 'Contract_Basis',
    Experience: 2,
  },
  {
    FullName: 'Leo Geidt',
    Name_With_Initials: 'L. Geidt',
    DisplayName: 'Leo Geidt',
    // EmployeeID: 4,
    Designation: 'User Experience Designer',
    Employee_Type: 'Other',
    Experience: 1,
  },
  {
    FullName: 'Jaydon Workman',
    Name_With_Initials: 'J. Workman',
    DisplayName: 'Jaydon Workman',
    // EmployeeID: 5,
    Designation: 'Senior Developer',
    Employee_Type: 'Part_Time',
    Experience: 3,
  },
  {
    FullName: 'Buben Levin',
    Name_With_Initials: 'B. Levin',
    DisplayName: 'Buben Levin',
    // EmployeeID: 5,
    Designation: 'Senior Developer',
    Employee_Type: 'Contract_Basis',
    Experience: 3,
  },
  {
    FullName: 'Omar Passaquindici Arcand',
    Name_With_Initials: 'O.P. Aracand',
    DisplayName: 'Omar Passaquindici Arcand',
    // EmployeeID: 5,
    Designation: 'Senior Developer',
    Employee_Type: 'Full_Time',
    Experience: 2,
  },
  {
    FullName: 'Phillip Mango',
    Name_With_Initials: 'P. Mango',
    DisplayName: 'Phillip Mango',
    // EmployeeID: 5,
    Designation: 'Senior Developer',
    Employee_Type: 'Contract_Basis',
    Experience: 5,
  },
  {
    FullName: 'Martin Workman',
    Name_With_Initials: 'M. Workman',
    DisplayName: 'Martin Workman',
    // EmployeeID: 5,
    Designation: 'Sales Officer',
    Employee_Type: 'Full_Time',
    Experience: 2,
  },
  {
    FullName: 'Ruben Dokidis  ',
    Name_With_Initials: 'R. Dokidis',
    DisplayName: 'Ruben Dokidis',
    // EmployeeID: 5,
    Designation: 'Senior Developer',
    Employee_Type: 'Full_Time',
    Experience: 6,
  },
  {
    FullName: 'Ruben Dokidis',
    Name_With_Initials: 'R. Dokidis',
    DisplayName: 'Ruben Dokidis',
    // EmployeeID: 5,
    Designation: 'Guest Admin',
    Employee_Type: 'Part_Time',
    Experience: 9,
  },
];

const createEmployee = prisma.employees.createMany({
  data: employees as Array<Employees>,
});
export default createEmployee;

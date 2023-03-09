import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [PrismaModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

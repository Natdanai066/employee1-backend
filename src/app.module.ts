import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entities/employee.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'viaduct.proxy.rlwy.net',
      port: 24877,
      username: 'root',
      password: "gbg452dDBEdBB5-C-Bb331DBaA62d563",
      database: 'railway',
      entities: [Employee],
      synchronize: true,
    }),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//

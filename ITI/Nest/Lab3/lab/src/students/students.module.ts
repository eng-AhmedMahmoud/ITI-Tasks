import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CoursesModule } from 'src/courses/courses.module';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]) , CoursesModule],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule { }

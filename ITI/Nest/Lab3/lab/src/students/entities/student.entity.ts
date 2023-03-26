import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "smallint", nullable: false })
  age: number;

  @ManyToMany(() => Course, course => course.students)
  @JoinTable()
  courses: Course[];
}

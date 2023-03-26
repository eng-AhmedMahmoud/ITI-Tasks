import { UserRole } from 'src/constants/enum_constant';
import { Course } from 'src/courses/entities/course.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", unique: true, nullable: false })
    email: string;

    @Column({ type: "varchar", nullable: false })
    password: string;

    @Column({ type: "varchar", nullable: false })
    name: string;

    @Column({ type: "smallint", nullable: false })
    age: number;

    @Column({ type: "enum", enum: UserRole, nullable: true, default: UserRole.STUDENT })
    role: UserRole;

    @ManyToMany(() => Course, course => course.students, {
        cascade: true,
        eager: true
    })
    @JoinTable()
    courses: Course[];
}

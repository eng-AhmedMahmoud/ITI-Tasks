import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: "varchar" })
    name: string;

    @Column({ nullable: false, type: "smallint" })
    duration: number;

    @ManyToMany(() => Student , student => student.courses)
    students: Student[];
}

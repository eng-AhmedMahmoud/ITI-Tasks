import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, type: "varchar" })
    name: string;

    @Column({ nullable: false, type: "smallint" })
    duration: number;

    @ManyToMany(() => User , student => student.courses)
    students: User[];
}

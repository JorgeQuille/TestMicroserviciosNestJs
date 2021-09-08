import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: false })
    dni: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    age: number;
    @Column()
    load: string;
    @Column({ default: "USER"})
    role: string;
    @Column({default: "CREATED"})
    status: string;

}
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Arrear {
    @PrimaryGeneratedColumn()
    id: number;
    @CreateDateColumn({ type: 'timestamp' })
    hour: Date;
    @CreateDateColumn({ type: 'timestamp' })
    date: Date;
    @Column()
    userId: number;
}
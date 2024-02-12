import { Role } from "src/roles/entities/role.entity";
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    dni: string;// encriptarlo

    @Column({ unique: true, nullable: false })
    email: string; // encriptarlo

    @Column({nullable: false})
    @Exclude()
    password: string;// encriptarlo

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @OneToOne(() => Role, role => role.id)
    @JoinColumn()
    role: Role;

    @Column({default: true})
    status: boolean;

    @Column({default: false})
    isLogged: boolean;

    @ManyToOne(() => User, user => user.patients)
    @JoinColumn()
    doctor: User;

    @OneToMany(() => User, user => user.doctor)
    patients: User[];

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }

}

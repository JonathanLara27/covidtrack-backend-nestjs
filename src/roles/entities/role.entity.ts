import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false})
    name: string;
    
    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({default: true})
    status: boolean;

    // @Column({ type: 'datetime', nullable: true })
    // deletedAt: Date;

    constructor(partial: Partial<Role>) {
        Object.assign(this, partial);
    }
}

import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class Patient extends CoreEntity{

    @Column()
    age:number;

    @Column({ type: 'numeric' })
    crp:number;

    @Column({ type: 'numeric' })
    ldh:number;

    @Column({ type: 'numeric' })
    hemo:number;

    @Column({nullable:true})
    result:boolean;

}
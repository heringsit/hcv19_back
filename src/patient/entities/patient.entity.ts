import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CoreEntity } from "src/common/entity/core.entity";

@Entity()
export class Patient extends CoreEntity{

    @Column()
    age:number;

    @Column()
    crp:number;

    @Column()
    ldh:number;

    @Column()
    hemo:number;

    @Column()
    result:boolean;

}
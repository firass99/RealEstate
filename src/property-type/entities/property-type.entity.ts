import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "../../property/entities/property.entity";
@Entity()
export class PropertyType {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    value:string;

    @OneToMany(()=>Property, (Property)=>Property.type)
    property:Property[];

}

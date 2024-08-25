import { Property } from "src/property/entities/property.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class PropertyType {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    value:string;

    @OneToMany(()=>Property, (Property)=>Property.type)
    property:Property[];

}

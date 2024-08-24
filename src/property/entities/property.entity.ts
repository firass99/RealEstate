import { User } from './../../user/entities/user.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from './../../property-feature/entities/property-feature.entity';

@Entity()
export class Property {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Column({default:0})
    price:number;

    @OneToOne(()=>PropertyFeature, (PropertyFeature)=>PropertyFeature.Property, {cascade:true})
    PropertyFeature:PropertyFeature;

    @ManyToOne(()=>User, (User)=>User.properties)
    user:User;

    


}

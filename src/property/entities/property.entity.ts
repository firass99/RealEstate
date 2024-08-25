import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from './../../property-feature/entities/property-feature.entity';
import { PropertyType } from 'src/property-type/entities/property-type.entity';
import { User } from "src/user/entities/user.entity";

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

    @ManyToMany(()=>User, (User)=>User.likeProperties)
    likedBy:User[];

    @ManyToOne(()=>PropertyType,(PropertyType)=>PropertyType.property)
    type:PropertyType;


}

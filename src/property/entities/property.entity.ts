import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyFeature } from "../../property-feature/entities/property-feature.entity";
import { PropertyType } from "../../property-type/entities/property-type.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Property {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({default:0})
    price:number;

    @Column()
    description:string;

    @OneToOne(()=>PropertyFeature, (PropertyFeature)=>PropertyFeature.property, {cascade:true})
    propertyFeature:PropertyFeature;

    @ManyToOne(()=>User, (User)=>User.properties)
    user:User;

    @ManyToMany(()=>User, (User)=>User.likeProperties)
    likedBy:User[];

    @ManyToOne(()=>PropertyType,(PropertyType)=>PropertyType.property)
    type:PropertyType;


}

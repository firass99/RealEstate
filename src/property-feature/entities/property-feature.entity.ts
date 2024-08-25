import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from './../../property/entities/property.entity';

@Entity()
export class PropertyFeature {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    bedrooms:number;
    
    @Column()
    bathrooms:number;
    
    @Column()
    parkingSpots:number;

    @Column()
    area:number;

    @Column()
    hasSwimingPool:boolean;

    @Column()
    hasGardenYard:boolean;
    
    @Column()
    hasBalcony:boolean;
    
    //()=> define target table, ()=> use to populate, cascade:["update.."]
    @OneToOne(()=>Property, (Property)=>Property.PropertyFeature)
    @JoinColumn()
    Property:Property;

}

import { Property } from "src/property/entities/property.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName:string;
    
    @Column()
    lastName:string;
    
    @Column()
    email:string;
    
    @Column()
    avatarUrl:string;

    @CreateDateColumn()
    createdAt:Date;

    //in relations callback functions, and reverse callback function is a must
    @OneToMany(()=>Property, (Property)=>Property.user)
    properties: Property[];

    @ManyToMany(()=>Property,(Property)=>Property.likedBy)
    @JoinTable()
    likeProperties:Property[];
    
    

}
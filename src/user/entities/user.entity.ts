import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "../../property/entities/property.entity";
import { Role } from "../../auth/enums/role.enum";
const bcrypt = require('bcryptjs');


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
    
    @Column({ nullable: true })    
    avatarUrl:string;

    @CreateDateColumn()
    createdAt:Date;

    @Column()
    password:string;

    @Column({
        type:'enum',
        enum:Role,
        default:Role.USER
    })
    role:Role;

    @Column({nullable:true})
    hashedRefreshToken:string;

    //in relations callback functions, and reverse callback function is a must
    @OneToMany(()=>Property, (Property)=>Property.user)
    properties: Property[];

    @ManyToMany(()=>Property,(Property)=>Property.likedBy)
    @JoinTable()
    likeProperties:Property[];
    

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10);
    }
    

}
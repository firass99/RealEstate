import { DataSourceOptions } from "typeorm";
import { User } from "../user/entities/user.entity";
import { PropertyFeature } from "../property-feature/entities/property-feature.entity";
import { PropertyType } from "../property-type/entities/property-type.entity";
import { Property } from "../property/entities/property.entity";
import * as path from "path"; // Ensure you're importing path correctly

export const dbConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'postgres',
    entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')], // Use path.join to construct the path correctly
    synchronize: true, // Do not set to true in production
};

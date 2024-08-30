import { runSeeders, SeederOptions } from "typeorm-extension";
import { DataSource, DataSourceOptions } from "typeorm";
import { MainSeeder } from "./main.seeder";
import { propertyFactory } from "./property.factory";
import { propertyFeatureFactory } from "./propertyfeatures.factory";
import { userFactory } from "./user.factory";
import dbConfig from "../config/dbConfig";

const options: DataSourceOptions & SeederOptions = {
    ...dbConfig(),
    factories: [propertyFactory, userFactory, propertyFeatureFactory],
  //MainSeeder coem from mainSeeders ..
    seeds: [MainSeeder]
};

//data src based on options .
const datasource = new DataSource(options);

datasource.initialize().then(
    async () => {
        //sync db schema 
        await datasource.synchronize(true);
        //run base on typeorm extension and run main seeder file
        await runSeeders(datasource);
        process.exit();
    });
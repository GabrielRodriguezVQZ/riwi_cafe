import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { loadEnvFile } from "node:process";
import { fileURLToPath } from "node:url";

import { envSchema } from "../config/env.schema.js";
import { DataSource } from "typeorm";
import { createTypeOrmOption } from "./typeorm.config.js";


const envFilePath = resolve(process.cwd(), '.env');

if(existsSync(envFilePath)){
    loadEnvFile(envFilePath)
}

const enviroment = envSchema.parse(envFilePath);
const databaseDirectory = dirname(fileURLToPath(import.meta.url))

export const AppDataSource = new DataSource({
    ...createTypeOrmOption(enviroment),

    entities: [
        join(databaseDirectory, '..', '**', '*entity.{ts,js}' ),
    ],

    migrations: [
        join(databaseDirectory, 'migrations', '*.{ts,js}')
    ]
})



/*C:\restaurante-api\src\database\data-souerce> */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { dbConfig } from './src/config/dbConfig';

/** DB configuration for migrations. */
const newDbConfig: TypeOrmModuleOptions = {
    ...(dbConfig().db as ConnectionOptions),
    migrations: ['src/db/migration/**/*.ts'],
    cli: {
        entitiesDir: 'src/modules/**/*.entity{.ts,.js}',
        migrationsDir: 'src/db/migration',
    },
};

export = newDbConfig;

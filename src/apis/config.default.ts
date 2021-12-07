import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export const orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'midway',
    synchronize: true,
    logging: false
} as MysqlConnectionOptions
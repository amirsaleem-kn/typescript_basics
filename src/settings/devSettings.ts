import { ISettings } from "./settingsInterface";

const appSettings: ISettings = {
    defaultPort: 3000,
    sequelize: {
        database: "testdb",
        dialect: "mysql",
        host: "localhost",
        password: "",
        sequelizePool: {
            acquire: 30000,
            idle: 10000,
            max: 5,
            min: 0
        },
        username: "root"
    }
};

export default appSettings;

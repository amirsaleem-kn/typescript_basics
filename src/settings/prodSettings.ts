import fs from "fs";
import { ISettings } from "./settingsInterface";

// dialectOptions: {
//     ssl: {
//         ca: fs.readFileSync("./vault/server-ca.pem"),
//         cert: fs.readFileSync("./vault/client-cert.pem"),
//         key: fs.readFileSync("./vault/client-key.pem")
//     }
// },

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

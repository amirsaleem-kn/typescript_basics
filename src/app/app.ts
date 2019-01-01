import express, { Application } from "express";
import Sequelize from "sequelize";
import Models from "../models";
import Routes from "../routes";
import settings from "../settings"; // get default application settings

/**
 * Defining an express application
 */

class App {

    public app: Application;
    public routePrv: Routes = new Routes();
    public modelPrv: Models = new Models();
    private DEFAULT_PORT: number;

    constructor() {
        this.app = express();
        this.DEFAULT_PORT = settings.defaultPort;
        this.init();
        this.routePrv.routes(this.app);
    }

    private init(): void {
        this.app.set("port", process.env.PORT || this.DEFAULT_PORT);
        this.app.set("settings", settings); // make settings available to the application
        this.sequelizeSetup();
    }

    private sequelizeSetup(): void {
        const sequelize: any = new Sequelize(settings.sequelize.database, settings.sequelize.username,
            settings.sequelize.password, {
            dialect: settings.sequelize.dialect,
            host: settings.sequelize.host,
            pool: settings.sequelize.sequelizePool
        });
        this.modelPrv.models(sequelize);
    }

}

export default App;

interface ISettings {
    defaultPort: number;
    sequelize: ISequelize;
}

interface ISequelizePool {
    acquire: number;
    idle: number;
    max: number;
    min: number;
}

interface ISequelize {
    database: string;
    dialect: string;
    host: string;
    password: string;
    sequelizePool: ISequelizePool;
    username: string;
}

export {
    ISettings,
    ISequelizePool,
    ISequelize
};

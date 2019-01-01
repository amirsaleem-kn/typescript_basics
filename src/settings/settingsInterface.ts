interface Settings {
    defaultPort: number;
    sequelize: Sequelize;
}

interface SequelizePool {
    acquire: number;
    idle: number;
    max: number;
    min: number;
}

interface Sequelize {
    database: string;
    dialect: string;
    host: string;
    password: string;
    sequelizePool: SequelizePool;
    username: string;
}

export {
    Settings,
    SequelizePool,
    Sequelize
}
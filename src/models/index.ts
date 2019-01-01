import Sequelize from "sequelize";

import User from "./user";

class Models {
    public User: any;
    public models( sequelize: any ): void {
        User.create( sequelize );
    }
}

export default Models;

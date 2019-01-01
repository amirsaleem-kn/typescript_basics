import Sequelize, { Sequelize as SequelizeType } from "sequelize";

interface UserAttributes {
    firstName: string,
    lastName: string
}

type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes;
type UserModel = Sequelize.Model<UserInstance, UserAttributes>;

class User {
    public user: UserModel;
    public create(sequelize: SequelizeType): any {
        this.user = sequelize.define("user", {
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            }
        });
        this.user.sync().then(() => {
            return this.user;
        });
    }
}

export default new User();

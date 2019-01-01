import Sequelize, { Sequelize as SequelizeType } from "sequelize";

interface IUserAttributes {
    firstName: string;
    lastName: string;
}

type UserInstance = Sequelize.Instance<IUserAttributes> & IUserAttributes;
type UserModel = Sequelize.Model<UserInstance, IUserAttributes>;

class User {
    public user: UserModel;
    private attributes: SequelizeAttributes<IUserAttributes>;
    public create(sequelize: SequelizeType): any {
        this.attributes = {
            firstName: { type: Sequelize.STRING },
            lastName: { type: Sequelize.STRING }
        };
        this.user = sequelize.define<UserInstance, IUserAttributes>("user", this.attributes);
        return this.user.sync().then(() => {
            return this.user;
        });
    }
}

export default new User();

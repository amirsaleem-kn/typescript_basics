import Sequelize, { Sequelize as SequelizeType } from "sequelize";

interface IUserAttributes {
    firstName: string;
    lastName: string;
    userId: number;
}

type UserInstance = Sequelize.Instance<IUserAttributes> & IUserAttributes;
type UserModel = Sequelize.Model<UserInstance, IUserAttributes>;

class User {
    public user: UserModel;
    private attributes: SequelizeAttributes<IUserAttributes>;
    public create(sequelize: SequelizeType): any {
        this.attributes = {
            firstName: { type: Sequelize.STRING, allowNull: false },
            lastName: { type: Sequelize.STRING, allowNull: true },
            userId: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true }
        };
        this.user = sequelize.define<UserInstance, IUserAttributes>("user", this.attributes, {
            getterMethods: {
                fullName(): string {
                    return `${this.firstName} ${this.lastName}`;
                }
            },
            timestamps: false
        });
        return this.user.sync().then((): UserModel => {
            return this.user;
        });
    }
}

export default new User();

import User from "../models/user";

class UserController {
    public getInstance(): any {
        return User.user;
    }
}

export default new UserController();

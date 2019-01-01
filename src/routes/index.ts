import { Application, Request, Response } from "express";
import { userController } from "../controllers";

class Routes {
    public routes( app: Application ): void {
        app.get("/", ( req: Request, res: Response ) => {
            const userInstance: any = userController.getInstance();
            userInstance.findAll({
                attributes: ["firstName", "lastName"]
              }).then(( users: any ): void => {
                if (users.length === 0) {
                    userInstance.create({ firstName: "Amir", lastName: "Saleem" }).then(( user: any ): void => {
                        res.send(user);
                    }).catch((err: any) => {
                        res.status(503).send(err);
                    });
                    return;
                }
                res.send(users);
            });
        });
    }
}

export default Routes;

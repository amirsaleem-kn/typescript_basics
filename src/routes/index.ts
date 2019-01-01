import { Application, Request, Response } from "express";
import { userController } from "../controllers";

class Routes {
    public routes( app: Application ): void {
        app.get("/", ( req: Request, res: Response ) => {
            const userInstance: any = userController.getInstance();
            userInstance.findAll().then(( users: any ): any => {
                res.send(users);
            });
        });
    }
}

export default Routes;

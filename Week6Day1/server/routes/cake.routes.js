import CakeController from "../controllers/cake.controller.js";

import { Router } from "express";

const routers = Router()

routers.route("/cake")
    .post(CakeController.create)
    .get(CakeController.ReadAll)

// routers.get("/cake",CakeController.ReadAll)
// routers.post("/cake",CakeController.create)

routers.route("/cake/:id")
    .get(CakeController.ReadOne)
    .put(CakeController.updateCake)
    .delete(CakeController.DeleteOneCake)



export default routers

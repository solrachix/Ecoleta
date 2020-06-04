import express from "express";

const routes = express.Router();

/**
 * Rota /
 */
routes.get("/", (req, res) => {
    return res.json({
        app: "#1 NLW - Next Level Week",
        author: 'Carlos Miguel',
        email: "carlos.miguel.oliveira.17@gmail.com",
    });
});

/**
 * Rota "points"
 * default Controllers = index, show, create, update, delete 
 */
import PointsController from "./controllers/PointsController";
const pointsController = new PointsController();
routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

/**
 * Rota "items"
 */
import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();
routes.get("/items", itemsController.index);

export default routes;
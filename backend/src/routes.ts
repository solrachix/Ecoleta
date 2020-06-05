import express from "express";
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);
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
routes.post(
    "/points",
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }),
    pointsController.create
);
routes.get(
    "/points",
    celebrate({ 
        query: Joi.object().keys({
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }),
    pointsController.index
);
routes.get(
    "/points/:id",
    celebrate({ 
        params: Joi.object().keys({
            id: Joi.number().required()
        })
    }),
    pointsController.show
);

/**
 * Rota "items"
 */
import ItemsController from "./controllers/ItemsController";
const itemsController = new ItemsController();
routes.get("/items", itemsController.index);

export default routes;
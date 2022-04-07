import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import welcomeController from "./controllers/welcome-controller.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/webdev');

const app = express();
app.use(cors());
app.use(express.json());

welcomeController(app);
helloController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);
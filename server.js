import express from 'express';
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import welcomeController from "./controllers/welcome-controller.js";
import mongoose from "mongoose";
import tweetsController from "./controllers/tweets-controller.js";

const CONNECTION_STRING = process.env.DB_PROJECT_CONNECTION_STRING
    || 'mongodb+srv://webdevfinalproject:webdevfinalpassword@cluster0.nrm2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

welcomeController(app);
userController(app);
tuitsController(app);
tweetsController(app);

app.listen(process.env.PORT || 4000);
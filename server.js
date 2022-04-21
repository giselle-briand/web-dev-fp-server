import express from 'express';
import session from 'express-session'
import cors from 'cors';
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import welcomeController from "./controllers/welcome-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_PROJECT_CONNECTION_STRING
    || 'mongodb+srv://webdevfinalproject:webdevfinalpassword@cluster0.nrm2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);


const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());

const sess = {
    secret: 'keyboard cat', // TODO: move this to environment variable
    cookie: {}
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

//app.use(cors());
//app.use(express.json());

welcomeController(app);
userController(app);
tuitsController(app);

app.listen(process.env.PORT || 4000);
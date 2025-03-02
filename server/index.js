import express from "express";
import { logger } from "./middlewares/logger.js";
import dotenv from 'dotenv';
import { errorHandler } from "./middlewares/errorHandler.js";
import session from "express-session";
import router from "./routes/routes.js";
import passport from "./configs/passport.js";
import mongooseConnect from "./configs/mongoose-connect.js";
import cors from 'cors';
import corsMiddleware from "./middlewares/cors.js";

dotenv.config();
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(corsMiddleware);

app.use(express.json());
app.use(logger);
app.use(errorHandler);
mongooseConnect();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'prodution' ? true : false,
        httpOnly: process.env.NODE_ENV === 'prodution' ? true : false,
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/api', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server listening in the port', PORT);
});
import express from "express";
import passport from "passport";
import { authController } from "./auth.controller.js";

const authRoutes = express.Router();

authRoutes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRoutes.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/api/auth/callback/failure',
        successRedirect: '/api/auth/callback/success'
    })
);

authRoutes.get('/callback/success', authController.successCallback);
authRoutes.get('/callback/failure', authController.failureCallback);
authRoutes.get('/user', authController.getUser);
authRoutes.get('/logout', authController.logout);

export default authRoutes;

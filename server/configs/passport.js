import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import dotenv from 'dotenv';
import { userModel } from "../models/user.model.js";
dotenv.config();

passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.SERVER_URL}:${process.env.PORT}/api/auth/google/callback`,
            passReqToCallback: true
        },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                let user = await userModel.findOne({ email: profile._json.email })
                if (!user) {
                    console.log(`User not found on this email :  ${profile._json.email}`)
                    user = await userModel.create({
                        name: profile._json.name,
                        email: profile._json.email,
                        avatar: profile._json.picture
                    });
                }
                return done(null, user);
            } catch (error) {
                console.log(error);
                return done(error, null);
            }
        }
    )
);
passport.serializeUser((user, done) => {
    done(null, user.email);
});
passport.deserializeUser(async (email, done) => {
    try {
        const user = await userModel.findOne({ email });
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport;
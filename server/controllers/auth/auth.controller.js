import { userModel } from "../../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

export const authController = {
    successCallback: (req, res) => {
        if (!req.user) {
            res.redirect('/api/auth/callback/failure');
        } else {
            console.log(req.user);
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.redirect(`${process.env.FRONTEND_URL}/`);
        }
    },

    failureCallback: (req, res) => {
        res.send("Error");
    },

    getUser: async (req, res) => {
        try {
            if (req.isAuthenticated()) {
                const user = await userModel.findOne({ email: req?.user?.email }, { __v: 0 });
                // console.log("Authenticated User:", user);
                if (user) {
                    return res.status(200).json({ user });
                } else {
                    return res.status(401).json({ msg: "User not yet registered" });
                }
            } else {
                return res.status(401).json({ msg: "Unauthorized" });
            }
        } catch (error) {
            console.error("Error in getUser:", error);
            return res.status(500).json({ msg: "Internal server error" });
        }
    },

    logout: (req, res) => {
        req.logOut((err) => {
            if (err) return res.status(500).send("Error logging out");
            res.json({ msg: "Logged out" });
        });
    }
};

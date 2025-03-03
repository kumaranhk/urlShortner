export const isAuthenticated = (req, res, next) => {
    console.log("Session from the client :", req.session);
    console.log("Result of is Authenticated : ", req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ msg: "Unauthorized from middleware" });
};

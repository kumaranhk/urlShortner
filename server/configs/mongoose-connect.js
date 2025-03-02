import mongoose from "mongoose";

const mongooseConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("Mongoose connection established");
    } catch (error) {
        console.log("Error in mongoose connection", error);
    }
}
export default mongooseConnect;
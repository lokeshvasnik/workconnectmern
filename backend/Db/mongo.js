import mongoose from "mongoose";

const mongoURI =
    "mongodb+srv://lokeshvasnik2003:FOQ1OPJCjT2SHraU@cluster0.wr8zkex.mongodb.net";

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Connected to DB Successfully!");
    } catch (error) {
        console.log(error);
    }
};

export default connectToMongo;

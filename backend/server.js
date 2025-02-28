import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectMongoDb.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on Port : ${PORT}`);
    connectToMongoDB();
})
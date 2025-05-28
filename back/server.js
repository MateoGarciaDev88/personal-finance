import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import authRoutes from "./routes/auth.js";
import verifyToken from "./middleware/verifyToken.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

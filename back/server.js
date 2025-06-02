import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
// ✅ CORRECCIÓN PRINCIPAL: Cambié el puerto por defecto a 3000 para que coincida con el frontend
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "http://localhost:5173", // Puerto del frontend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
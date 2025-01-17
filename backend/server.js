import  express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config()

connectDB();

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.use('/api/products', productRoutes);

app.listen(PORT,( ) => {
    console.log(`Server listening on port: ${PORT}`);
})


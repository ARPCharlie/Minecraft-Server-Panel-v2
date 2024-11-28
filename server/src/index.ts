import express from "express";
import cors from "cors";

// Config
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
import serverRoutes from "./routes/server";
app.use("/server", serverRoutes);

// Run
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

import express from "express";

// Config
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());

// Routes
import serverRoutes from "./routes/server";
app.use("/server", serverRoutes);

// Run
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

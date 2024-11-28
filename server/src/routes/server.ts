import { Router } from "express";
import { exec } from "child_process";

const router = Router();

// Utility function for logging
function log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
}

router.post("/start", (req, res) => {
    log("Received request to start Minecraft server.");
    exec("docker start minecraft-server", (err) => {
        if (err) {
            log(`Error starting server: ${err.message}`);
            return res.status(500).json({ error: err.message });
        }
        log("Minecraft server started successfully.");
        res.json({ status: "Minecraft server started" });
    });
});

router.post("/stop", (req, res) => {
    log("Received request to stop Minecraft server.");
    exec("docker stop minecraft-server", (err) => {
        if (err) {
            log(`Error stopping server: ${err.message}`);
            return res.status(500).json({ error: err.message });
        }
        log("Minecraft server stopped successfully.");
        res.json({ status: "Minecraft server stopped" });
    });
});

export default router;

import { Router } from "express";
import { exec } from "child_process";

const router = Router();

router.post("/start", (req, res) => {
    exec("docker start minecraft-server", (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ status: "Minecraft server started" });
    });
});

router.post("/stop", (req, res) => {
    exec("docker stop minecraft-server", (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ status: "Minecraft server stopped" });
    });
});

export default router;

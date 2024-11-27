"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var child_process_1 = require("child_process");
var router = (0, express_1.Router)();
router.post("/start", function (req, res) {
    (0, child_process_1.exec)("docker start minecraft-server", function (err) {
        if (err)
            return res.status(500).json({ error: err.message });
        res.json({ status: "Minecraft server started" });
    });
});
router.post("/stop", function (req, res) {
    (0, child_process_1.exec)("docker stop minecraft-server", function (err) {
        if (err)
            return res.status(500).json({ error: err.message });
        res.json({ status: "Minecraft server stopped" });
    });
});
exports.default = router;

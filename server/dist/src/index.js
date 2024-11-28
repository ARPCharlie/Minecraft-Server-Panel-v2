"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// Config
var PORT = 3000;
var app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}));
// Routes
var server_1 = __importDefault(require("./routes/server"));
app.use("/server", server_1.default);
// Run
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});

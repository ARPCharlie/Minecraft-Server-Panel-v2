"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var pool = new pg_1.Pool({
    user: "admin",
    host: "postgres",
    database: "minecraft_panel",
    password: "password",
    port: 5432,
});
exports.default = pool;

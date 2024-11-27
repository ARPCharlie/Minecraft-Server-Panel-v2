import { Pool } from "pg";

const pool = new Pool({
    user: "admin",
    host: "postgres",
    database: "minecraft_panel",
    password: "password",
    port: 5432,
});

export default pool;

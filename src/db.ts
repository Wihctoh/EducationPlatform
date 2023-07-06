import { Pool } from "pg";

const pool = new Pool({
  port: 5432,
  password: '12345678',
  user: "postgres",
  database: "EducationPlatform",
  host: "localhost",
});

export { pool };

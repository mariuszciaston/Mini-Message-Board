import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_LOCAL_URL ?? process.env.DATABASE_PUBLIC_URL,
});

const isConnReset = (err: unknown): boolean =>
  typeof err === "object" &&
  err !== null &&
  (err as { code?: string }).code === "ECONNRESET";

const query = async (text: string, params?: unknown[], retries = 5) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await pool.query(text, params);
    } catch (err) {
      if (isConnReset(err) && i < retries - 1)
        await new Promise((r) => setTimeout(r, 1000));
      else throw err;
    }
  }
};

export { query };

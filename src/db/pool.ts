import dotenv from "dotenv";
import { Pool, QueryResultRow } from "pg";
dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_LOCAL_URL ?? process.env.DATABASE_PUBLIC_URL,
  connectionTimeoutMillis: 2000,
  idleTimeoutMillis: 30000,
});

const query = async <T extends QueryResultRow>(
  text: string,
  params?: unknown[],
) => {
  return pool.query<T>(text, params);
};

export { query };

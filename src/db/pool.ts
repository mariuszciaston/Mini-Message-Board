import dotenv from "dotenv";
import { Pool, QueryResultRow } from "pg";
dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_LOCAL_URL ?? process.env.DATABASE_PUBLIC_URL,
});

// const query = async <T extends QueryResultRow>(
//   text: string,
//   params?: unknown[],
// ) => {
//   return pool.query<T>(text, params);
// };

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const query = async <T extends QueryResultRow>(
  sql: string,
  params?: unknown[],
) => {
  let attempts = 5;
  while (attempts--) {
    try {
      return await pool.query<T>(sql, params);
    } catch (err) {
      if (!attempts) throw err;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error("Unreachable");
};

export { query };

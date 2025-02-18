import { Client, QueryConfig } from "pg";

async function query(queryObjects: QueryConfig) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();
  const response = await client.query(queryObjects);
  await client.end();

  return response;
}

export default {
  query,
};

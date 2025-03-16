import { Client, QueryConfig } from "pg";

async function query(queryString: QueryConfig | string) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  try {
    const response = await client.query(queryString);
    return response;
  } catch (error) {
    throw new Error("Erro ao executar query");
  } finally {
    await client.end();
  }
}

export default {
  query,
};

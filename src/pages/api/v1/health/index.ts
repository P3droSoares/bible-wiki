import database from "@/infra/database";
import { NextApiRequest, NextApiResponse } from "next";

export type HealthResponse = {
  updated_at: string;
  services: {
    database: DatabaseHealth;
  };
};

type DatabaseHealth = {
  status: "healthy" | "unhealthy";
  max_connections: number;
  opened_connections: number;
  version: string;
};

export default async function health(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>,
) {
  const updatedAt = new Date().toISOString();
  const dbHealth = await getDbHealth();

  return res.status(200).json({
    updated_at: updatedAt,
    services: {
      database: {
        ...dbHealth,
      },
    },
  });
}

async function getDbHealth(): Promise<DatabaseHealth> {
  const maxConnections = await database
    .query("SHOW max_connections;")
    .then((result) => parseInt(result.rows[0].max_connections));

  const openedConnections = await database
    .query({
      text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1",
      values: [process.env.POSTGRES_DB],
    })
    .then((result) => result.rows[0].count);

  const dbVersion = await database
    .query("SHOW server_version;")
    .then((result) => result.rows[0].server_version);

  return {
    status: "healthy",
    max_connections: maxConnections,
    opened_connections: openedConnections,
    version: dbVersion,
  };
}

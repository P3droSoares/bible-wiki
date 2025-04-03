import migrationRunner from "node-pg-migrate";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "node:path";

export default async function migrations(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (process.env.DATABASE_URL == null)
    throw new Error("Connection string não fornecida ao MigrationRunner")

  const migrations = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("src", "infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });

  return res.status(200).json(migrations);
}

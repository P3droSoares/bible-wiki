import migrationRunner, { RunnerOption } from "node-pg-migrate";
import { NextApiRequest, NextApiResponse } from "next";
import { join } from "node:path";

import database from "@/infra/database";

export default async function migrations(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (process.env.DATABASE_URL == null)
    throw new Error("Connection string não fornecida ao MigrationRunner");

  const dbClient = await database.getNewClient();
  const defaultMigrationOptions: RunnerOption = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("src", "infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (req.method === "GET") {
    const pendingMigrations = await migrationRunner(defaultMigrationOptions);
    await dbClient.end();
    return res.status(200).json(pendingMigrations);
  }

  if (req.method === "POST") {
    const migratedMigrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    await dbClient.end();

    if (migratedMigrations.length > 0) {
      return res.status(201).json(migratedMigrations);
    }

    return res.status(200).json(migratedMigrations);
  }

  return res.status(405).end();
}

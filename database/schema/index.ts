import { SQLiteDatabase } from "expo-sqlite";

import { createProfilesTable } from "./profiles";
import { createGlassTypesTable } from "./glassTypes";
import { createColorsTable } from "./colors";
import { createCustomersTable } from "./customers";
import { createQuotationsTable } from "./quotations";
import { createQuotationItemsTable } from "./quotationItems";
import { createSettingsTable } from "./settings";

export async function createAllTables(db: SQLiteDatabase) {
  // Temporary: drop all tables to force schema update during development
  await db.execAsync(`
    DROP TABLE IF EXISTS profiles;
    DROP TABLE IF EXISTS glass_types;
    DROP TABLE IF EXISTS colors;
    DROP TABLE IF EXISTS customers;
    DROP TABLE IF EXISTS quotations;
    DROP TABLE IF EXISTS quotation_items;
    DROP TABLE IF EXISTS settings;
  `);
  await createProfilesTable(db);
  await createGlassTypesTable(db);
  await createColorsTable(db);
  await createCustomersTable(db);
  await createQuotationsTable(db);
  await createQuotationItemsTable(db);
  await createSettingsTable(db);
}
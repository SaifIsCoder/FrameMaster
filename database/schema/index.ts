import { SQLiteDatabase } from "expo-sqlite";

import { createProfilesTable } from "./profiles";
import { createGlassTypesTable } from "./glassTypes";
import { createColorsTable } from "./colors";
import { createCustomersTable } from "./customers";
import { createQuotationsTable } from "./quotations";
import { createQuotationItemsTable } from "./quotationItems";
import { createSettingsTable } from "./settings";

export async function createAllTables(db: SQLiteDatabase) {
  await createProfilesTable(db);
  await createGlassTypesTable(db);
  await createColorsTable(db);
  await createCustomersTable(db);
  await createQuotationsTable(db);
  await createQuotationItemsTable(db);
  await createSettingsTable(db);
}
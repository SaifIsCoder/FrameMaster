import { SQLiteDatabase } from "expo-sqlite";

import { seedProfiles } from "./profiles";
import { seedGlassTypes } from "./glassTypes";
import { seedColors } from "./colors";
import { seedSettings } from "./settings";

export async function seedDatabase(db: SQLiteDatabase) {
  await seedProfiles(db);
  await seedGlassTypes(db);
  await seedColors(db);
  await seedSettings(db);
}
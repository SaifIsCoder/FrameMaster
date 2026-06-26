// database/db.ts

import * as SQLite from "expo-sqlite";

import { createAllTables } from "./schema/index";
import { seedDatabase } from "./seeds/index";
/**
 * SQLite Database Instance
 */
export const db = SQLite.openDatabaseSync("framemaster.db");

/**
 * Initialize database
 * Runs automatically when the app starts.
 */
export async function initializeDatabase(): Promise<void> {
  try {
    console.log("====================================");
    console.log("Initializing FrameMaster Database...");
    console.log("====================================");

    // Enable Foreign Keys
    await db.execAsync(`
      PRAGMA foreign_keys = ON;
    `);

    // Create Tables
    await createAllTables(db);

    // Seed Default Data
    await seedDatabase(db);

    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Database initialization failed.");
    console.error(error);

    throw error;
  }
}

import { SQLiteDatabase } from "expo-sqlite";

export async function createProfilesTable(db: SQLiteDatabase) {
  await db.execAsync(`
    DROP TABLE IF EXISTS profiles;
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      company TEXT,
      bar_length REAL NOT NULL,
      weight REAL DEFAULT 0,
      price REAL DEFAULT 0,
      unit TEXT DEFAULT 'ft',
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
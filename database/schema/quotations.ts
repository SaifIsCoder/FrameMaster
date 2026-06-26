import { SQLiteDatabase } from "expo-sqlite";

export async function createQuotationsTable(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS quotations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quotation_number TEXT UNIQUE,
      customer_id INTEGER NOT NULL,
      total_amount REAL DEFAULT 0,
      labour_cost REAL DEFAULT 0,
      hardware_cost REAL DEFAULT 0,
      discount REAL DEFAULT 0,
      notes TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(customer_id) REFERENCES customers(id)
    );
  `);
}
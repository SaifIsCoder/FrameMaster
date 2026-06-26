import { SQLiteDatabase } from "expo-sqlite";

export async function createQuotationItemsTable(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS quotation_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      quotation_id INTEGER NOT NULL,
      window_type TEXT NOT NULL,
      width REAL NOT NULL,
      height REAL NOT NULL,
      quantity INTEGER DEFAULT 1,
      profile_id INTEGER,
      glass_type_id INTEGER,
      color_id INTEGER,
      material_cost REAL DEFAULT 0,
      total_cost REAL DEFAULT 0,

      FOREIGN KEY(quotation_id) REFERENCES quotations(id),
      FOREIGN KEY(profile_id) REFERENCES profiles(id),
      FOREIGN KEY(glass_type_id) REFERENCES glass_types(id),
      FOREIGN KEY(color_id) REFERENCES colors(id)
    );
  `);
}
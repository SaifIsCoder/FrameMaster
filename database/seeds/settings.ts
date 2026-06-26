import { SQLiteDatabase } from "expo-sqlite";

export async function seedSettings(db: SQLiteDatabase) {
  const result = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM settings;"
  );

  if ((result?.count ?? 0) > 0) return;

  await db.runAsync(
    `
    INSERT INTO settings
    (key, value, description)
    VALUES
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?);
    `,
    [
      "labour_cost",
      "0",
      "Default labour cost",

      "hardware_cost",
      "0",
      "Default hardware cost",

      "profit_percentage",
      "0",
      "Default profit percentage",

      "currency",
      "PKR",
      "Application currency",
    ]
  );
}
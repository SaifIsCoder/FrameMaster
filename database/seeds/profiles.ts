import { SQLiteDatabase } from "expo-sqlite";

export async function seedProfiles(db: SQLiteDatabase) {
  const result = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM profiles;"
  );

  if ((result?.count ?? 0) > 0) return;

  await db.runAsync(
    `
    INSERT INTO profiles
    (name, category, company, bar_length, weight, price, unit)
    VALUES
    (?, ?, ?, ?, ?, ?, ?),
    (?, ?, ?, ?, ?, ?, ?),
    (?, ?, ?, ?, ?, ?, ?);
    `,
    [
      "Main Frame",
      "Main Frame",
      "Default",
      18,
      0,
      0,
      "ft",

      "Glass Frame",
      "Glass Frame",
      "Default",
      18,
      0,
      0,
      "ft",

      "Net Frame",
      "Net Frame",
      "Default",
      18,
      0,
      0,
      "ft",
    ]
  );
}
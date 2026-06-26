import { SQLiteDatabase } from "expo-sqlite";

export async function seedGlassTypes(db: SQLiteDatabase) {
  const result = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM glass_types;"
  );

  if ((result?.count ?? 0) > 0) return;

  await db.runAsync(
    `
    INSERT INTO glass_types
    (name, thickness, price_per_sqft)
    VALUES
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?),
    (?, ?, ?);
    `,
    [
      "5mm Clear",
      5,
      0,

      "5mm Green",
      5,
      0,

      "5mm Brown",
      5,
      0,

      "8mm Frosted",
      8,
      0,
    ]
  );
}
import { SQLiteDatabase } from "expo-sqlite";

export async function seedColors(db: SQLiteDatabase) {
  const result = await db.getFirstAsync<{ count: number }>(
    "SELECT COUNT(*) as count FROM colors;"
  );

  if ((result?.count ?? 0) > 0) return;

  await db.runAsync(
    `
    INSERT INTO colors
    (name, extra_cost)
    VALUES
    (?, ?),
    (?, ?),
    (?, ?),
    (?, ?);
    `,
    [
      "Silver",
      0,

      "White",
      0,

      "Black",
      0,

      "Brown",
      0,
    ]
  );
}
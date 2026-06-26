import { db } from "../db";

export class GlassTypeRepository {
  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM glass_types WHERE is_active=1 ORDER BY name;`
    );
  }

  async create(name: string, thickness: number, price: number) {
    return await db.runAsync(
      `INSERT INTO glass_types
      (name, thickness, price_per_sqft)
      VALUES (?, ?, ?);`,
      [name, thickness, price]
    );
  }
}

export default new GlassTypeRepository();
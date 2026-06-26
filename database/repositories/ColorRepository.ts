import { db } from "../db";

export class ColorRepository {
  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM colors WHERE is_active=1 ORDER BY name;`
    );
  }

  async create(name: string, extraCost: number) {
    return db.runAsync(
      `INSERT INTO colors
      (name, extra_cost)
      VALUES (?, ?);`,
      [name, extraCost]
    );
  }
}

export default new ColorRepository();
import { db } from "../db";

export class ProfileRepository {
  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM profiles WHERE is_active = 1 ORDER BY name;`
    );
  }

  async getById(id: number) {
    return await db.getFirstAsync(
      `SELECT * FROM profiles WHERE id = ?;`,
      [id]
    );
  }

  async create(profile: {
    name: string;
    category: string;
    company: string;
    bar_length: number;
    weight: number;
    price: number;
    unit: string;
  }) {
    return await db.runAsync(
      `INSERT INTO profiles
      (name, category, company, bar_length, weight, price, unit)
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [
        profile.name,
        profile.category,
        profile.company,
        profile.bar_length,
        profile.weight,
        profile.price,
        profile.unit,
      ]
    );
  }

  async update(id: number, profile: any) {
    return await db.runAsync(
      `UPDATE profiles
       SET
         name=?,
         category=?,
         company=?,
         bar_length=?,
         weight=?,
         price=?,
         unit=?,
         updated_at=CURRENT_TIMESTAMP
       WHERE id=?;`,
      [
        profile.name,
        profile.category,
        profile.company,
        profile.bar_length,
        profile.weight,
        profile.price,
        profile.unit,
        id,
      ]
    );
  }

  async delete(id: number) {
    return await db.runAsync(
      `UPDATE profiles
       SET is_active = 0
       WHERE id = ?;`,
      [id]
    );
  }
}

export default new ProfileRepository();
import { db } from "../db";

export interface Profile {
  id: number;
  name: string;
  category: string;
  company: string;
  bar_length: number;
  weight: number;
  price: number;
  unit: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export class ProfileRepository {
  /**
   * Get all active profiles
   */
  async getAll(): Promise<Profile[]> {
    return await db.getAllAsync<Profile>(
      `SELECT *
       FROM profiles
       WHERE is_active = 1
       ORDER BY name;`
    );
  }

  /**
   * Get profiles by category
   * Example:
   * MAIN
   * GLASS
   * NET
   */
  async getByCategory(category: string): Promise<Profile[]> {
    return await db.getAllAsync<Profile>(
      `SELECT *
       FROM profiles
       WHERE category = ?
         AND is_active = 1
       ORDER BY name;`,
      [category]
    );
  }

  /**
   * Get profile by ID
   */
  async getById(id: number): Promise<Profile | null> {
    return await db.getFirstAsync<Profile>(
      `SELECT *
       FROM profiles
       WHERE id = ?;`,
      [id]
    );
  }

  /**
   * Create Profile
   */
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
      (
        name,
        category,
        company,
        bar_length,
        weight,
        price,
        unit
      )
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

  /**
   * Update Profile
   */
  async update(
    id: number,
    profile: {
      name: string;
      category: string;
      company: string;
      bar_length: number;
      weight: number;
      price: number;
      unit: string;
    }
  ) {
    return await db.runAsync(
      `UPDATE profiles
       SET
         name = ?,
         category = ?,
         company = ?,
         bar_length = ?,
         weight = ?,
         price = ?,
         unit = ?,
         updated_at = CURRENT_TIMESTAMP
       WHERE id = ?;`,
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

  /**
   * Soft Delete
   */
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
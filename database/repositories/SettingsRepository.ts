import { db } from "../db";

export class SettingsRepository {
  async get(key: string) {
    return await db.getFirstAsync(
      `SELECT * FROM settings WHERE key=?;`,
      [key]
    );
  }

  async update(key: string, value: string) {
    return await db.runAsync(
      `UPDATE settings
      SET value=?
      WHERE key=?;`,
      [value, key]
    );
  }

  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM settings;`
    );
  }
}

export default new SettingsRepository();
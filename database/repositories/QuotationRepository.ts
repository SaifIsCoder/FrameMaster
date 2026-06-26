import { db } from "../db";

export class QuotationRepository {
  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM quotations
       ORDER BY created_at DESC;`
    );
  }

  async getById(id: number) {
    return await db.getFirstAsync(
      `SELECT * FROM quotations
      WHERE id=?;`,
      [id]
    );
  }

  async create(data: {
    quotation_number: string;
    customer_id: number;
    total_amount: number;
    labour_cost: number;
    hardware_cost: number;
    discount: number;
    notes: string;
  }) {
    return await db.runAsync(
      `INSERT INTO quotations
      (
      quotation_number,
      customer_id,
      total_amount,
      labour_cost,
      hardware_cost,
      discount,
      notes
      )
      VALUES
      (?, ?, ?, ?, ?, ?, ?);`,
      [
        data.quotation_number,
        data.customer_id,
        data.total_amount,
        data.labour_cost,
        data.hardware_cost,
        data.discount,
        data.notes,
      ]
    );
  }
}

export default new QuotationRepository();
import { db } from "../db";

export class CustomerRepository {
  async getAll() {
    return await db.getAllAsync(
      `SELECT * FROM customers ORDER BY created_at DESC;`
    );
  }

  async getById(id: number) {
    return await db.getFirstAsync(
      `SELECT * FROM customers WHERE id=?;`,
      [id]
    );
  }

  async create(customer: {
    name: string;
    phone: string;
    address: string;
  }) {
    return await db.runAsync(
      `INSERT INTO customers
      (name, phone, address)
      VALUES (?, ?, ?);`,
      [customer.name, customer.phone, customer.address]
    );
  }
}

export default new CustomerRepository();
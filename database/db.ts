import * as SQLite from 'expo-sqlite';

// Open or create the local database
export const db = SQLite.openDatabaseSync('framemaster.db');

// Function to initialize all tables
export const initDatabase = () => {
  try {
    db.execSync(`
      PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      -- Customers Table
      CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT,
        address TEXT,
        createdAt TEXT NOT NULL
      );

      -- Quotations Table
      CREATE TABLE IF NOT EXISTS quotations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customerId INTEGER,
        date TEXT NOT NULL,
        width REAL NOT NULL,
        height REAL NOT NULL,
        quantity INTEGER NOT NULL,
        glass TEXT NOT NULL,
        colour TEXT NOT NULL,
        net TEXT NOT NULL,
        hardware REAL NOT NULL,
        labour REAL NOT NULL,
        total REAL NOT NULL,
        FOREIGN KEY (customerId) REFERENCES customers (id) ON DELETE CASCADE
      );

      -- Aluminium Profiles Table
      CREATE TABLE IF NOT EXISTS profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        frameType TEXT NOT NULL, -- e.g., 'Main Frame', 'Glass Frame', 'Net Frame'
        position TEXT NOT NULL,  -- e.g., 'Top', 'Bottom', 'Left', 'Right'
        profileName TEXT NOT NULL,
        rate REAL NOT NULL
      );

      -- Glass Types Table
      CREATE TABLE IF NOT EXISTS glass_types (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL, -- e.g., '5 mm Clear', 'Reflective'
        rate REAL NOT NULL
      );

      -- Colours Table
      CREATE TABLE IF NOT EXISTS colours (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
      );

      -- Settings Table (Key-Value pair for simple configuration)
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
    `);
    
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};
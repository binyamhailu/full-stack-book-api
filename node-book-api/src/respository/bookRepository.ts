import { Pool, QueryResult } from 'pg';
import { config } from '../config';
import { Book } from '../entities/bookEntity';

const pool = new Pool({
  connectionString: config.dbConnectionString,
});

export async function getAllBooks(): Promise<Book[]> {
  const query = 'SELECT * FROM books';
  const result: QueryResult<Book> = await pool.query(query);
  return result.rows;
}

export async function getBookById(id: number): Promise<Book | null> {
  const query = 'SELECT * FROM books WHERE id = $1';
  const result: QueryResult<Book> = await pool.query(query, [id]);
  return result.rows[0] || null;
}


export async function buyBook(bookId: number): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // buying logic

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export async function getAllBooks(req: Request, res: Response): Promise<void> {
  const books = await bookService.getAllBooks();
  res.json(books);
}

export async function getBookById(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id, 10);
  const book = await bookService.getBookById(id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
}

// Add other CRUD controllers for books here

export async function buyBook(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id, 10);
  try {
    await bookService.buyBook(id);
    res.json({ message: 'Book bought successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to buy the book' });
  }
}

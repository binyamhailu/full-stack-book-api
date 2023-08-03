import * as bookRepository from '../respository/bookRepository'
import { Book } from '../entities/bookEntity';

export async function getAllBooks(): Promise<Book[]> {
  return await bookRepository.getAllBooks();
}

export async function getBookById(id: number): Promise<Book | null> {
  return await bookRepository.getBookById(id);
}


export async function buyBook(bookId: number): Promise<void> {
  return await bookRepository.buyBook(bookId);
}

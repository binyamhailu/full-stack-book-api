import { Connection, Repository } from 'typeorm';
import { Books } from './entities/book.entity';
export declare class BooksService {
    private booksRepository;
    private connection;
    constructor(booksRepository: Repository<Books>, connection: Connection);
    getAllBooks(): Promise<Books[]>;
    getBookById(id: number): Promise<Books>;
    createBook(book: Partial<Books>): Promise<Books>;
    updateBook(id: number, book: Partial<Books>): Promise<Books>;
    deleteBook(id: number): Promise<void>;
    buyBook(id: number): Promise<Books>;
}

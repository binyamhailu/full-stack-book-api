import { BooksService } from './books.service';
import { Books } from './entities/book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Promise<Books[]>;
    getBookById(id: number): Promise<Books>;
    createBook(book: Partial<Books>): Promise<Books>;
    updateBook(id: number, book: Partial<Books>): Promise<Books>;
    deleteBook(id: number): Promise<void>;
    buyBook(id: number): Promise<Books>;
}

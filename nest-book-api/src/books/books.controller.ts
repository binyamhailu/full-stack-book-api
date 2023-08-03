import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Books } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Books[]> {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Books> {
    return this.booksService.getBookById(id);
  }

  @Post()
  async createBook(@Body() book: Partial<Books>): Promise<Books> {
    return this.booksService.createBook(book);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() book: Partial<Books>,
  ): Promise<Books> {
    return this.booksService.updateBook(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    return this.booksService.deleteBook(id);
  }
  @Post('buy/:id')
  async buyBook(@Param('id') id: number): Promise<Books> {
    return this.booksService.buyBook(id);
  }
}

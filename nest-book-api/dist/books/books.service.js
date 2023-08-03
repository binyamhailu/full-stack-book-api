"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("./entities/book.entity");
let BooksService = class BooksService {
    constructor(booksRepository, connection) {
        this.booksRepository = booksRepository;
        this.connection = connection;
    }
    async getAllBooks() {
        return this.booksRepository.find();
    }
    async getBookById(id) {
        return this.booksRepository.findOne({
            where: {
                id,
            },
        });
    }
    async createBook(book) {
        return this.booksRepository.save(book);
    }
    async updateBook(id, book) {
        await this.booksRepository.update(id, book);
        return this.getBookById(id);
    }
    async deleteBook(id) {
        await this.booksRepository.delete(id);
    }
    async buyBook(id) {
        const queryRunner = this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const book = await queryRunner.manager
                .createQueryBuilder(book_entity_1.Books, 'book')
                .where('book.id = :id', { id })
                .getOne();
            if (!book) {
                throw new common_1.NotFoundException('Book not found');
            }
            await queryRunner.commitTransaction();
            return book;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Books)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map
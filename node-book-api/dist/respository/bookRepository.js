"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyBook = exports.getBookById = exports.getAllBooks = void 0;
const pg_1 = require("pg");
const config_1 = require("../../config");
const pool = new pg_1.Pool({
    connectionString: config_1.config.dbConnectionString,
});
function getAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM books';
        const result = yield pool.query(query);
        return result.rows;
    });
}
exports.getAllBooks = getAllBooks;
function getBookById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM books WHERE id = $1';
        const result = yield pool.query(query, [id]);
        return result.rows[0] || null;
    });
}
exports.getBookById = getBookById;
// Add other CRUD operations for books here
function buyBook(bookId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        try {
            yield client.query('BEGIN');
            // Implement your buying logic here (if applicable)
            yield client.query('COMMIT');
        }
        catch (error) {
            yield client.query('ROLLBACK');
            throw error;
        }
        finally {
            client.release();
        }
    });
}
exports.buyBook = buyBook;

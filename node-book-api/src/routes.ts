import express from 'express';
import * as bookController from './controllers/bookController';

export const routes = express.Router();

// Book Routes
routes.get('/books', bookController.getAllBooks);
routes.get('/books/:id', bookController.getBookById);
routes.post('/buy/:id', bookController.buyBook);

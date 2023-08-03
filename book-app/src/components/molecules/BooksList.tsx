// src/components/BooksList.tsx

import React from 'react';
import { useQuery } from 'react-query';
import { getBooks } from '../../api/bookApi';
import Book from '../atoms/Book';

const BooksList: React.FC = () => {
  const { data: books } = useQuery('books', getBooks);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-3">
          {books?.data.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksList;

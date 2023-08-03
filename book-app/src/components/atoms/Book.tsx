
import React from 'react';

interface BookProps {
  id: number;
  title: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

interface Props { 
  book: BookProps;
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <div className="relative flex flex-col gap-1">
      <div className="relative h-48">
        <img alt={book.title} src={book.coverImage} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col p-2 gap-2">
        <div className="text-gray-900 font-bold text-sm">{book.title}</div>
        <div className="flex items-center justify-between">
          <div className="text-red-500 font-bold text-sm">{book.discountRate}%</div>
          <div className="font-semibold text-gray-900">
            {book.price} <span className="text-gray-900 text-sm">원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

// src/components/BooksList.tsx

import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getBooks } from '../../api/bookApi';
import Book from '../atoms/Book';
import PullToRefresh from 'react-pull-to-refresh';

const BooksList: React.FC = () => {
  const [page, setPage] = useState(1);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery('books', ({ pageParam }) => getBooks(pageParam), {
    getNextPageParam: (lastPage) => page + 1,
    initialData: {
      pages: [
        {
          data: [], // Initial empty data for the first page
        },
      ],
    },
  });

  useEffect(() => {
    // Fetch the first page when the component is mounted
    fetchNextPage();
  }, []);

  const handleRefresh = () => {
    setPage(1); // Reset page state to 1
    return fetchNextPage(); // Fetch the first page to refresh the data
  };

  const handleLoadMore = () => {
    fetchNextPage();
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <PullToRefresh onRefresh={handleRefresh} isFetching={isFetchingNextPage}>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-3">
            {data?.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page.data.map((book) => (
                  <Book key={book.id} book={book} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </PullToRefresh>

      {hasNextPage && (
        <div>
          <button onClick={handleLoadMore} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}

      {isFetchingNextPage && !hasNextPage && (
        <div className="text-center mt-3">
          <span className="animate-spin text-blue-600">Refreshing...</span>
        </div>
      )}
    </>
  );
};

export default BooksList;

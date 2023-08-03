import React, { useCallback, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getBooks } from '../../api/bookApi';
import Book from '../atoms/Book';

import Scrollbars from 'react-scrollbars-custom';

const PAGE_SIZE = 6;

const InfiniteBooksList: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const fetchBooks = useCallback(async (page = 1) => {
    const response = await getBooks(page, PAGE_SIZE);
    return response.data;
  }, []);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'books',
    ({ pageParam }) => fetchBooks(pageParam),
    {
      getNextPageParam: (lastPage) => (lastPage.length === PAGE_SIZE ? lastPage.length + 1 : false),
    }
  );

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await queryClient.refetchQueries('books');
    setIsRefreshing(false);
  };

  return (
    <Scrollbars style={{ height: 'calc(100vh - 200px)' }}>
      <InfiniteScroll
        dataLength={data?.pages.flat().length || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        refreshFunction={handleRefresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>{isRefreshing ? 'Refreshing...' : 'Pull down to refresh'}</h3>
        }
        releaseToRefreshContent={<h3 style={{ textAlign: 'center' }}>Release to refresh</h3>}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-3">
          {data?.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </InfiniteScroll>
    </Scrollbars>
  );
};

export default InfiniteBooksList;

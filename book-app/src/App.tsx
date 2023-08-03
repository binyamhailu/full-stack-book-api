import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import InfiniteBooksList from './components/molecules/InfiniteBookList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto px-4 py-8">
        <div className="relative flex items-center justify-center p-3 sm:px-0">
          <div className="font-bold text-lg">Books</div>
        </div>
        <main>
          <InfiniteBooksList />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

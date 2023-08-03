import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import BooksList from './components/molecules/BooksList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`flex flex-col max-w-3xl mx-auto p-0 `}>
        <div className="relative flex items-center justify-center p-3 sm:px-0">
          <div className="font-bold text-lg">Books</div>
        </div>
        <main>
          <BooksList />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

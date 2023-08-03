import './App.css'
import InfiniteBooksList from './components/molecules/InfiniteBookList'
function App() {

  return (
    <><div className="relative flex items-center justify-center p-3 sm:px-0">
      <div className="font-bold text-lg">Books</div>
    </div>
    <div>
        {/* <BooksList /> */}
        <InfiniteBooksList />
     </div></>

  )
}

export default App

import { useState } from 'react';

import BooksList from './BooksList';
import Pagination from './Pagination';
import { ax } from '../helpers/helpers';

const Main = () => {
  const [search, setSearch] = useState('');
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPg] = useState(10);
  const handleClick = () => {
    ax(setBook, search);
  };
  const indexOfLastBook = currentPage * booksPerPg;
  const indexOfFirstBook = indexOfLastBook - booksPerPg;
  const currentBook = book.slice(indexOfFirstBook, indexOfLastBook);
  const paginate = (pageNum) => setCurrentPage(pageNum);
  return (
    <div>
      <div className='searchBar'>
        <input
          className='input'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='buttonSearch' onClick={() => handleClick()}>
          Search
        </button>
      </div>
      <div>
        <BooksList book={currentBook} />
      </div>
      <Pagination
        totalBooks={book.length}
        booksPerPg={booksPerPg}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Main;

import { useState } from 'react';
import axios from 'axios';
import BooksList from './BooksList';
import Pagination from './Pagination';

const Main = () => {
  const [search, setSearch] = useState('');
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPg] = useState(10);
  const handleClick = () => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          search +
          '&key=AIzaSyBE9QyO8Err7HP8zeGE9UIsJp0MosdQnuU' +
          '&maxResults=40',
      )
      .then((res) => setBook(res.data.items))
      .catch((error) => console.log(error));
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
      />
    </div>
  );
};
export default Main;

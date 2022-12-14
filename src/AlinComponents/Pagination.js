import { useState } from 'react';

const Pagination = (props) => {
  const { totalBooks, paginate, booksPerPg } = props;
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPg); i++) {
    pageNum.push(i);
  }
  console.log(totalBooks);
  return (
    <div>
      <nav>
        {pageNum.map((el) => (
          <li key={el}>
            <a onClick={() => paginate(el)}>{el}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Pagination;

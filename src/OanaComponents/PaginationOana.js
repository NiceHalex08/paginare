import React from 'react';

const PaginationOana = (props) => {
  const {
    postPerPage,
    totalPosts,
    paginate,
    previousPage,
    nextPage,
    currentPage,
  } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  //adaugat culoare pe currentPage
  return (
    <div className='div-pagination'>
      {totalPosts > 1 && (
        <ul className='pagination-container'>
          <button
            onClick={previousPage}
            className='page-number'
            disabled={currentPage === 1}
          >
            <li>Prev</li>
          </button>
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className='page-number'
            >
              {number}
            </li>
          ))}
          <button
            disabled={currentPage === pageNumbers.length}
            onClick={nextPage}
            className='page-number'
          >
            <li>Next</li>
          </button>
        </ul>
      )}
    </div>
  );
};

export default PaginationOana;

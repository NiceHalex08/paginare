const Pagination = (props) => {
  const { totalBooks, paginate, booksPerPg, currentPage } = props;
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPg); i++) {
    pageNum.push(i);
  }

  return (
    <div className='center'>
      <div className='pagination'>
        <nav>
          {pageNum.map((el) => (
            <button
              onClick={() => paginate(el)}
              style={{ color: el === currentPage ? 'red' : 'blue' }}
            >
              {el}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

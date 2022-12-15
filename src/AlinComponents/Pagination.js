const Pagination = (props) => {
  const { totalBooks, paginate, booksPerPg } = props;
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPg); i++) {
    pageNum.push(i);
  }
  console.log(totalBooks);
  return (
    <div className='center'>
      <div className='pagination'>
        <nav>
          {pageNum.map((el) => (
            <a1 onClick={() => paginate(el)}>{el}</a1>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

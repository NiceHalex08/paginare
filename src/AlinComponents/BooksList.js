const BooksList = (props) => {
  const { book } = props;

  return (
    <div>
      <div className='bookList'>
        {book.map((el) => (
          <div className='book'>
            <img
              className='imgA'
              src={
                el.volumeInfo.imageLinks &&
                el.volumeInfo.imageLinks.smallThumbnail
              }
              alt=''
            />
            <p className='overflow-ellipsis'>{el.volumeInfo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BooksList;

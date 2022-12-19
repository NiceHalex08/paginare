const BooksList = (props) => {
  const { book } = props;

  // let imageLink =
  //   el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
      <div className='bookList'>
        {book.map((el) => (
          <div className='book'>
            <img
              src={
                el.volumeInfo.imageLinks &&
                el.volumeInfo.imageLinks.smallThumbnail
              }
              alt=''
            />
            <p>{el.volumeInfo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BooksList;

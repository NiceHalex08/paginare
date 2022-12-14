const BooksList = (props) => {
  const { book } = props;
  console.log(book);

  // let imageLink =
  //   el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div>
      <div>
        {book.map((el) => (
          <div>
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

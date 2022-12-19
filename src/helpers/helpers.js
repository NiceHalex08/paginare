import axios from 'axios';

export const ax = (setBook, search) => {
  axios
    .get(
      'https://www.googleapis.com/books/v1/volumes?q=' +
        search +
        '&key=AIzaSyBE9QyO8Err7HP8zeGE9UIsJp0MosdQnuU' +
        '&maxResults=40'
    )
    .then((res) => setBook(res.data.items))
    .catch((error) => console.log(error));
};

import { useSelector } from 'react-redux';

import BookCard from './card';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <ul>
        {books.length > 0
          ? books.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))
          : null}
      </ul>
    </div>
  );
};

export default BookList;

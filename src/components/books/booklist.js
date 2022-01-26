import BookCard from './card';

const books = [
  {
    id: 0,
    author: 'Suzanne Collins',
    category: 'Action',
    title: 'The Hunger Games',
  },
  {
    id: 1,
    author: 'Julie Carwood',
    category: 'Action',
    title: 'Shadow Dance',
  },
  {
    id: 2,
    author: 'Jeffery Deaver',
    category: 'Thriller',
    title: 'Shallow Graves',
  },
];

const BookList = () => (
  <div>
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {' '}
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  </div>
);

export default BookList;

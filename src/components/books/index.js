import BookDetails from './details';

const books = [
  {
    id: 0,
    author: 'Suzanne Collins',
    genre: 'Action',
    title: 'The Hunger Games',
  },
  {
    id: 1,
    author: 'Julie Carwood',
    genre: 'Action',
    title: 'Shadow Dance',
  },
  {
    id: 2,
    author: 'Jeffery Deaver',
    genre: 'Thriller',
    title: 'Shallow Graves',
  },
];

const BookCard = (item) => {
  const { book } = item;

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

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

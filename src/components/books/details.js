import CrudButtons from './crud-buttons';

const BookDetails = (item) => {
  const { book } = item;
  return (
    <div>
      <div>
        <p>{book.genre}</p>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <CrudButtons book={book} />
      </div>
    </div>
  );
};

export default BookDetails;

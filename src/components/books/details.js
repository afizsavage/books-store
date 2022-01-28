import CrudButtons from './crud-buttons';

const BookDetails = (item) => {
  const { book } = item;
  return (
    <div className="details">
      <div>
        <p>{book.title}</p>
        <p>{book.category}</p>
        <CrudButtons book={book} />
      </div>
    </div>
  );
};

export default BookDetails;

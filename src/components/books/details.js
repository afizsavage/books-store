import CrudButtons from './crud-buttons';

const BookDetails = (item) => {
  const { book } = item;
  return (
    <div className="details">
      <div>
        <p className="action">{book.category}</p>
        <p className="title">{book.title}</p>
        <CrudButtons book={book} />
      </div>
    </div>
  );
};

export default BookDetails;

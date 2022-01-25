import BookDetails from './details';

const BookCard = (item) => {
  const { book } = item;

  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};

export default BookCard;

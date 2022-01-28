import CurrentChapter from './current-chapter';
import BookDetails from './details';
import Progress from './progress-bar';

const BookCard = (item) => {
  const { book } = item;

  return (
    <div className="card">
      <BookDetails book={book} />
      <Progress />
      <CurrentChapter />
    </div>
  );
};

export default BookCard;

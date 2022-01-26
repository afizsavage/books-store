import { useDispatch } from 'react-redux';

import { removeBook } from '../../redux/books/books';

const buttons = [
  {
    title: 'Remove',
  },
];

const CrudButton = (item) => {
  const { btn } = item;
  return (
    <button type="button" onClick={btn.removeBookFromStore}>
      {btn.title}
    </button>
  );
};

const CrudButtons = (itemId) => {
  const { book } = itemId;
  const dispatch = useDispatch();
  let btn;

  const removeBookFromStore = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <ul>
        {buttons.map((button) => {
          switch (button.title) {
            case 'Remove':
              btn = { ...button, removeBookFromStore };
              break;

            default:
              break;
          }

          return (
            <li key={book.id}>
              <CrudButton btn={btn} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CrudButtons;

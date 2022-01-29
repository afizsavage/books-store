import { useDispatch } from 'react-redux';
import axios from 'axios';

import { removeBook } from '../../redux/books/books';

const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NVqSC6UJSOssSHkbvuAm';

const buttons = [
  {
    title: 'Comments',
  },
  {
    title: 'Remove',
  },
  {
    title: 'Edit',
  },
];

const CrudButton = (item) => {
  const { btn } = item;

  return (
    <button className={btn.title === 'Remove' ? 'remove' : null} type="button" onClick={btn.removeBookFromStore}>
      {btn.title}
    </button>
  );
};

const CrudButtons = (itemId) => {
  const { book } = itemId;
  const dispatch = useDispatch();
  let btn;

  const removeBookFromStore = () => {
    axios
      .delete(`${baseAPI}/books/${book.id}`)
      .then(dispatch(removeBook(book.id)));
  };

  return (
    <div>
      <ul className="buttons">
        {buttons.map((button) => {
          switch (button.title) {
            case 'Edit':
              btn = { ...button };
              break;
            case 'Comments':
              btn = { ...button };
              break;
            default:
              btn = { ...button, removeBookFromStore };
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

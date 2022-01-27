import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../../redux/books/books';

const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NVqSC6UJSOssSHkbvuAm';

const AddingForm = () => {
  const dispatch = useDispatch();

  const [newBook, setnewBook] = useState({
    id: null,
    title: '',
    category: null,
  });

  const submitBookToStore = () => {
    const uniqueId = uuid();
    axios.post(`${baseAPI}/books`, {
      item_id: uniqueId, title: newBook.title, category: newBook.category,
    }).then(dispatch(addBook({ ...newBook, id: uniqueId })));
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          placeholder="Book title"
          value={newBook.title}
          onInput={(e) => setnewBook({ ...newBook, title: e.target.value })}
        />
        <label htmlFor="categories">
          Category
          <select
            name="categories"
            id="categories"
            onChange={(e) => {
              setnewBook({ ...newBook, category: e.target.value });
            }}
          >
            <option value="action">Action</option>
            <option value="science Fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
        </label>
        <button onClick={submitBookToStore} type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddingForm;

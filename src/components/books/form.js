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
    category: 'Action',
  });

  const submitBookToStore = () => {
    const uniqueId = uuid();
    axios.post(`${baseAPI}/books`, {
      item_id: uniqueId, title: newBook.title, category: newBook.category,
    }).then(dispatch(addBook({ ...newBook, id: uniqueId })));
  };

  return (
    <div className="form-wrap">
      <h2>ADD NEW BOOK</h2>
      <form>
        <div>
          <input
            className="Lesson-Panel"
            type="text"
            placeholder="Book title"
            value={newBook.title}
            onInput={(e) => setnewBook({ ...newBook, title: e.target.value })}
          />
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
        </div>
        <button className="Rectangle-2" onClick={submitBookToStore} type="button">Add book</button>
      </form>
    </div>
  );
};

export default AddingForm;

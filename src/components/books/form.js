import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';

import { addBook } from '../../redux/books/books';

const AddingForm = () => {
  const dispatch = useDispatch();

  const [newBook, setnewBook] = useState({
    id: null,
    title: '',
    author: '',
    category: null,
  });

  const submitBookToStore = () => {
    dispatch(addBook({ ...newBook, id: nextId() }));
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
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onInput={(e) => setnewBook({ ...newBook, author: e.target.value })}
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

import { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './App.css';
import Home from './components/books';
import Header from './components/header';
import { addBook } from './redux/books/books';

const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NVqSC6UJSOssSHkbvuAm';

const updateReduxStore = (books, dispatch) => {
  Object.entries(books).forEach((book) => dispatch(addBook({ ...book[1][0], id: book[0] })));
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${baseAPI}/books`).then((books) => updateReduxStore(books.data, dispatch));
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <h1>UNDER CONSTRUCTION</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

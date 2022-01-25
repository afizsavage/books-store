import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/books';
import Header from './components/header';

function App() {
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
}

export default App;

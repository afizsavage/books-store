import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <header>header</header>
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
        </Route>
        <Route path="/books">
          <h1>Books</h1>
        </Route>
        <Route path="/categories">
          <h1>categories</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>home</h1>
        </Route>
        <Route path="/categories">
          <h1>categories</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

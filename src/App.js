import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Board from './components/Board/Board';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ticket/:id">
          <Board />
        </Route>
        <Route path="/">
          <Board />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

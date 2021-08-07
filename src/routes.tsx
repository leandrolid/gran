import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { QuestionsContextProvider } from './contexts/QuestionsContext';
import Home from './pages/Home';
import Questions from './pages/Questions';

function Routes() {
  return (
    <QuestionsContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/plans" component={Questions} />
        </Switch>
      </BrowserRouter>
    </QuestionsContextProvider>
  );
}

export default Routes;

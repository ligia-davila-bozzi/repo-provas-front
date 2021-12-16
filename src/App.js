import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import SendTest from './pages/SendTest';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/send-test' exact>
          <SendTest/>
        </Route>
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

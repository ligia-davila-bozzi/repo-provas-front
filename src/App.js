import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import SendTest from './pages/SendTest';
import Professors from './pages/Professors';

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
        <Route path='/professors' exact>
          <Professors/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import Home from './pages/Home';
import SendTest from './pages/SendTest';
import Professors from './pages/Professors';
import Subjects from './pages/Subjects';
import TestsBySubject from './pages/TestsBySubject';
import TestsByProfessor from './pages/TestsByProfessor';

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
        <Route path='/subjects' exact>
          <Subjects/>
        </Route>
        <Route path='/subjects/:id/tests' exact>
          <TestsBySubject/>
        </Route>
        <Route path='/professors/:id/tests' exact>
          <TestsByProfessor/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;

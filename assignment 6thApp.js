import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import Create from './Create';
import Services from './Services';
import Projects from './Projects';
import Contacts from './Contacts';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Services">
          <Services/>
        </Route>
        <Route exact path="/Projects">
          <Projects/>
        </Route>
        <Route exact path="/Contacts">
          <Contacts/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
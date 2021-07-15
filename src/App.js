import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app-container">
       <Router>
        <Navbar />
        <div className="content">
        <Switch>
          <Route path='/' exact component={Home} className="content-item" />
          <Route path='/about' component={About} className="content-item" />

        </Switch>
        </div>
        
      </Router>
  </div>
    
  );
}

export default App;

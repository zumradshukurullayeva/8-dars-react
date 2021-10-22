import './App.css';
import './component/IceCream';
import IceArr from './component/IceArr';
import Header from './component/Header';
import AddIceCreamForm from './component/AddIceCreamForm';
import {
   Route,
   Switch, 
   BrowserRouter as Router 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add-ice-cream">
            <AddIceCreamForm />
          </Route>

          <Route path="/">
            <IceArr />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;

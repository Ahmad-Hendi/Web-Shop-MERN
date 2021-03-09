
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';


// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


function App() {
  const [sideToggle, setSideToggle] = useState(false); 
  {/* every time i wlick on the navbar icon it will show.... the same for hidde */}
  {/* the initial state is false it means hidde */}

  return (
    <Router>
      {/* NavBar */}
      {/* whenever we clicked we will call a function that calls the setSideToggle and set the state = true */}
      <Navbar click={() => setSideToggle(true)} />
      {/* SideDrawer */}
      {/* if it's false so it's hidden, if it's true it shows */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* BackDrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      {/* ================================== */}
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}/> {/* to render home screen */}
          <Route exact path='/product/:id' component={ProductScreen}/> {/* to render Product screen */}
          <Route exact path='/cart' component={CartScreen}/> {/* to render Cart screen */}
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;

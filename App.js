
import About from './components/About';
import Client from './components/Client';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Service from './components/Service';
import Cta from './components/Cta';
import Count from './components/Count';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Price from './components/Price';
import Asked from './components/Asked';
import Contact from './components/Contact';
import Footer from './components/Footer';







function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Client/>
          <About/>
          <Count/>
          <Service/>
          <Cta/>
          <Portfolio/>
          <Team/>
          <Price/>
          <Asked/>
          <Contact/>
          <Footer/>
        </Route>
        <Route exact path="/about">
          <About/>
          <Count/>
        </Route>
        <Route exact path="/services">
          <Service/>
          <Cta/>
        </Route>
        
        <Route exact path="/portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/team">
          <Team/>
        </Route>
        <Route exact path="/pricing">
          <Price/>
          <Asked/>
        </Route>
        
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>

    
   
    
  );
}

export default App;
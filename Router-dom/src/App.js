import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const Menu = () =>{
  return(
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  )
}


class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <h1>React App Route</h1>
          <Menu />
          <di>
            <Route exact path="/" component={Home} />
            <Route axact path="/about" component={About} />
            <Route axact path="/contact" component={Contact} />
          </di>
        </div>
      </Router>
    )
  }
}

export default App;
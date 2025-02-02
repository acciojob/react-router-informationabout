import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './../styles/App.css';

// Home Component
const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is the home page of the application.</p>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div>
      <h1>About this Application</h1>
      <p>This application demonstrates basic routing with React Router.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Route Matching */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

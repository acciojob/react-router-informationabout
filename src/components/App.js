
import React from "react";
import './../styles/App.css';
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
       <li> <Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link> </li>
    </ul>
    </header>
  );
};


const Home = () => {
  return (
    <h1>
     Welcome to my website!
    </h1>  
  );
};
const About = () => {
  return (
    <div>
    <h1>
     About
    </h1>
    <p>This is a sample React Router program.</p>
    </div>
  );
};

const App = () => {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

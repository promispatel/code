import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
        <br />

        <Routes>
          <Route path='/' exact={true} element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>Error 404 Page Not Found.</h1>
    </div>
  );
}
export default App;

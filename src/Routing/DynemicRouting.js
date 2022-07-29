import React from 'react';
import {
  BrowserRouter as BRouter,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function App() {
  const users = [
    { id: 1, name: 'promis' },
    { id: 2, name: 'sam' },
    { id: 3, name: 'jordan' },
  ];
  return (
    <div className='App'>
      <BRouter>
        {users.map((item, i) => (
          <div>
            <Link key={i} to={'/user/' + item.id}>
              <h1>{item.name}</h1>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path='/user/:id' element={<Users />}></Route>
        </Routes>
      </BRouter>
    </div>
  );
}

function Users(props) {
  console.log(props);
  return (
    <div>
      <h1>user id is</h1>
    </div>
  );
}
export default App;

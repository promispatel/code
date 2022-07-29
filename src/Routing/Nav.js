import { Link } from 'react-router-dom';

function link() {
  return (
    <div>
      <Link to='/'> Home Page</Link>
      <br />
      <Link to='/about'> About Page</Link>
    </div>
  );
}

export default link;

import Main from './AlinComponents/Main';
import { Link } from 'react-router-dom';

import './App.css';
const Alin = () => {
  return (
    <div>
      <div className='header'>
        <div className='titleA'>Books</div>
        <div className='btnArea'>
          <Link to='/Oana'>
            <button className='btnHeader'>Oana</button>
          </Link>
          <Link to='/Cristina'>
            <button className='btnHeader'>Cristina</button>
          </Link>
          <Link to='/'>
            <button className='btnHeader'>Home</button>
          </Link>
        </div>
      </div>
      <div className='mainA'>
        <Main />
      </div>
      <div className='footer'></div>
    </div>
  );
};
export default Alin;

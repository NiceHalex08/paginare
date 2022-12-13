import { Link } from 'react-router-dom';
const Main1 = () => {
  return (
    <div className='main'>
      <div>
        <Link to='/Alin'>
          <button className='sideButton'>Alin</button>
        </Link>
      </div>
      <div>
        <Link to='/Oana'>
          <button className='sideButton'>Oana</button>
        </Link>
      </div>
      <div>
        <Link to='/Cristina'>
          <button className='sideButton'>Cristina</button>
        </Link>
      </div>
    </div>
  );
};
export default Main1;

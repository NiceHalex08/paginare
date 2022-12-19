import { Link } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const Main1 = () => {

  const {pathname} = useLocation();
  
  return (
    <div className='main'>
      <div>
        <Link to='/Alin'>
          <button className='sideButton'>Alin</button>
        </Link>
      </div>
      <div>
        {pathname !=='/Oana' &&
        <Link to='/Oana'>
          <button className='sideButton'>Oana</button>
        </Link>
      }
      </div>
      <div>
        <Link to='/Cristina'>
          <button className='sideButton'>Cristina</button>
        </Link>
      </div>
      <div>
        {pathname!=='/' &&
        <Link to='/'>
          <button className='sideButton'>Home</button>
        </Link>
        }
      </div>
    </div>
  );
};
export default Main1;

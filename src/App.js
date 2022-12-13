// MAIN PAGE
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main1 from './Main1';
import Alin from './Alin';
import Oana from './Oana';
import Cristina from './Cristina';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main1 />} />
          <Route path='/Alin' element={<Alin />} />
          <Route path='/Oana' element={<Oana />} />
          <Route path='/Cristina' element={<Cristina />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


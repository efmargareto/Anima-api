// --------------------
// App js
// --------------------

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './views/Login/Login';
import Register from './views/Register/Register';

function App() {
  return ( 
    <div className="App"> 
      <h1>Anima NFT</h1>

      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
